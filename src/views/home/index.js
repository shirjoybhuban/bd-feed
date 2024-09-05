import PostCreate from "@/components/home/post/PostCreate";
import PostList from "@/components/home/post/PostList";
import { useSelector } from "react-redux";

const HomeView = () => {
 //Called for geting global loading state
  const { getPaginatedPosts: paginatedPosts } = useSelector((state) => state.postSlice);

  return (
    <>
      <div className="bg-ternary-100">
        <div className="max-w-screen-sm m-auto px-5 md:px-10 py-4 md:py-10">
          {/* Post create component */}
          {paginatedPosts.loading == "COMPLETE" && <PostCreate />}
          {/* Post list component */}
          <PostList />
        </div>
      </div>
    </>
  );
};

export default HomeView;
