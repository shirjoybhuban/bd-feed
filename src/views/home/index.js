import { postDispatcher } from "@/store/post/postSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const HomeView = () => {
  const [loading, setLoading] = useState(true);
  // Loading state can be handle in locally or globally.
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      postDispatcher.getPaginatedPosts(page, {
        success: (response) => {
          console.log("response", response);
          setLoading(false);
        },
        error: (err) => {
          setLoading(false);
          if(error.status == 500){
            
          }
          console.log("Error in fetching orders", err);
        },
      })
    );
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <>I will Feed here</>;
};

export default HomeView;
