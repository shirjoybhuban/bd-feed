import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import dynamic from "next/dynamic";
const PostCreateForm = dynamic(() => import("./PostCreateForm"), {
  loading: () => <p>Getting Form...</p>,
});

// This  component responsible for Adding post. I have made a collapsble design so that we don't load form in fat render. We split the form from intial bundle load.
const PostCreate = () => {
  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger className="text-primary-600 font-bold bg-white p-5 w-full">Whats going on your mind ?</CollapsibleTrigger>
        <CollapsibleContent>
          <PostCreateForm />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PostCreate;
