import PostCard from "@/components/home/cards/PostCard";
import PostCreate from "@/components/home/post/PostCreate";
import { postDispatcher } from "@/store/post/postSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeView = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // Loading state can be handle in locally or globally.
  const { getPaginatedPosts: paginatedPosts } = useSelector((state) => state.postSlice);
  // Get result from state to show in UI

  //Fetch post from rect State
  const fetchPosts = () => {
    setIsLoading(true);
    dispatch(
      postDispatcher.getPaginatedPosts(1, {
        success: (response) => {
          setIsLoading(false);
        },
        error: (err) => {
          setIsLoading(false);
          if (error.status == 500) {
          }
          console.log("Error in fetching orders", err);
        },
      })
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleScroll = () => {
    //Check if scroll is inthe last position
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchPosts();
  };

  // scroll event listener added for infinite scroll.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <>
      <div className="bg-ternary-100">
        <div className="max-w-screen-sm m-auto px-5 md:px-10 py-4 md:py-10">
          {/* Post create component */}
          {!isLoading && <PostCreate />}
          {/* Post list rendering */}
          {paginatedPosts.response &&
            paginatedPosts.response.posts.length > 0 &&
            paginatedPosts.response.posts.map((item) => (
              <PostCard
                key={item.id}
                userName={item.hasOwnProperty("userName") ? item.userName : "Bhuban Malek"}
                reactions={item.reactions}
                title={item.title}
                body={item.body}
                createdAt={item.hasOwnProperty("createdAt") ? item.createdAt : "05/09/2024"}
              />
            ))}
          {/* Show loading State */}
          <div className="flex justify-center items-center">
            {isLoading && <h1 className="text-primary-600 font-semibold text-lg">Hang tight! Fetching feeds</h1>}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeView;
