import { ordersDispatcher } from "@/redux-toolkit/order/orderSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const HomeView = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      ordersDispatcher.getPaginatedOrders(page, {
        success: (response) => {
          console.log("response", response);
          setLoading(false);
        },
        error: (err) => {
          setLoading(false);
          console.log("Error in fetching orders", err);
        },
      })
    );
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <></>;
};

export default HomeView;
