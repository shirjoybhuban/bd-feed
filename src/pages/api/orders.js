import orderData from "../../const/test-orders.json";
export default function handler(req, res) {
  if (req.method === "GET") {
    const { page } = req.query;
    const orders = getOrders(page);
    res.status(200).json(orders);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getOrders = (page) => {
  let itemsPerPage = 10;
  let currentPage = page ? parseInt(page) : 1;
  let orderSet = [];
  for (var i = 0; i < orderData.length; i++) {
    if (i >= (currentPage - 1) * itemsPerPage && i < currentPage * itemsPerPage) {
      orderSet.push(orderData[i]);
    }
  }
  let response = {
    meta: {
      total: orderData?.length,
      meta_per_page: itemsPerPage,
      current_page: currentPage,
    },
    data: orderSet,
  };
  return response;
};
