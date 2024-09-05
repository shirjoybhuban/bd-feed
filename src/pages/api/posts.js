export default function handler(req, res) {
  if (req.method === "GET") {
    const { page } = req.query;
    const posts = getPosts(page);
    res.status(200).json(posts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getPosts = async (page) => {
  let response = await fetch("https://dummyjson.com/posts?limit=10&skip=10");
  console.log("response", response);
  //return response;
};


