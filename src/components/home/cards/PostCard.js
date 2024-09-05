import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeartIcon from "@/components/icons/svg/HeartIcon";
import Image from "next/image";

const PostCard = ({ userName, reactions, title, body, createdAt }) => {
  return (
    <Card className="w-full my-10 bg-white">
      <CardHeader className="flex items-center gap-4 p-4">
        <Image src="/images/home/medium_avtr.png" width={48} height={48} alt="Picture of the author" />
        <div className="flex-1 space-y-1 flex justify-center flex-col">
          <div className="font-medium">{userName}</div>
          <div className="text-xs text-gray-500 ">{createdAt}</div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="mb-3 font-bold text-lg text-primary-600">{title}</p>
        <p>{body}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <HeartIcon className="w-4 h-4" />
            <span className="sr-only">Like</span>
          </Button>
        </div>
        {reactions?.likes > 0 && (
          <div className="text-sm text-gray-500">{reactions?.likes > 0 ? reactions?.likes : 0} Likes</div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
