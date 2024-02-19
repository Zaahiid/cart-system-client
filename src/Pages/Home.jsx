import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/product`);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center md:items-stretch my-10">
        {data && data?.map((item) => <ProductCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
