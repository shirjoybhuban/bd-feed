import { postDispatcher } from "@/store/post/postSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../cards/PostCard";

const PostList = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  // Loading state can be handle in locally or globally.
  const { getPaginatedPosts: paginatedPosts } = useSelector((state) => state.postSlice);
  // Get result from state to show in UI

  //Fetch post from rect State
  const fetchPosts = () => {
    setIsLoading(true);
    dispatch(
      postDispatcher.getPaginatedPosts(10, {
        success: (response) => {
          setIsLoading(false);
        },
        error: (err) => {
          setIsLoading(false);

          //We cann create error set which can be called in catch to handle all kind of error
          if (error.status == 500) {
            console.log("Something went wrong. please try again later", err);
          } else {
            console.log("Error in fetching post", err);
          }
        },
      })
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleScroll = () => {
    //Check if scroll is inthe last position
    if (
      window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
      isLoading
    ) {
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
      {" "}
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
    </>
  );
};

export default PostList;
