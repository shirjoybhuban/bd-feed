import { postDispatcher } from "@/store/post/postSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const HomeView = () => {
  const [loading, setLoading] = useState(true);
  // Loading state can be handle in locally or globally.
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    dispatch(
      postDispatcher.getPaginatedPosts(page, {
        success: (response) => {
          console.log("response", response);
          setTimeout(() => {
            setPosts((post) => [...post, ...response.posts]);
            setLoading(false);
          }, 5000);
        },
        error: (err) => {
          setLoading(false);
          if (error.status == 500) {
          }
          console.log("Error in fetching orders", err);
        },
      })
    );
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
      return;
    }
    fetchPosts();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <ul>
        {posts.map((item) => (
          <li className="h-96 bg-slate-50" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <div>{loading && <h1>Loading</h1>}</div>
    </>
  );
};

export default HomeView;
