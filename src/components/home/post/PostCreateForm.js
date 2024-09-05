import { Button } from "@/components/ui/button";
import { postTemplate } from "@/const/postTemplate";
import { addPostToFront } from "@/store/post/postSlice";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const DATE = new Date();

const PostCreateForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   Form Submit Handling

  const onSubmit = (data) => {
    let authoreName = data.name;
    let title = data.title;
    let content = data.content;
    postTemplate.userName = authoreName;
    postTemplate.title = title;
    postTemplate.body = content;
    postTemplate.createdAt = DATE.getDay() + "/" + DATE.getMonth() + "/" + DATE.getFullYear();

    // Append the post with current list
    dispatch(addPostToFront(postTemplate));
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 bg-slate-50">
          <input
            type="text"
            className="bg-primary-100 m-1 p-3"
            placeholder="Author name"
            {...register("name", {
              required: "Author name is required.",
              maxLength: {
                value: 30,
                message: "Author name exceed maxLength.",
              },
              minLength: {
                value: 3,
                message: "Author name minimum length is 3.",
              },
            })}
          />
          <ErrorMessage errors={errors} name="name" />
          <input
            type="text"
            className="bg-primary-100 m-1 p-3"
            placeholder="Title"
            {...register("title", {
              required: "Title is required.",
              minLength: {
                value: 5,
                message: "Title minimum length is 5.",
              },
            })}
          />
          <ErrorMessage errors={errors} name="title" />
          <textarea
            rows={4}
            placeholder="Post content"
            className="bg-primary-100 m-1 p-3"
            {...register("content", {
              required: "Content is required.",
              minLength: {
                value: 10,
                message: "Content minimum length is 10.",
              },
            })}
          />
          <ErrorMessage errors={errors} name="content" />
          <Button variant="outline" type="submit">
            Add your post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostCreateForm;
