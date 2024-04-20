// Home page
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProductList } from "../features/product/productSlice";
import { useDocumentTitle } from '../services/title';
import {
  Banner,
  Facts,
  Features,
  FeatureSection,
  FruitShops,
  Hero,
  ModalSearch,
  Testimonial,
} from "../components";

const Home = () => {
  const dispatch = useDispatch();
  useDocumentTitle("Fruitables - Home")
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fruitables-7yyj.onrender.com/api/v1/fruits/all")
      .then((res) => {
        const { status, all_products, fruitOnly, vegetables } = res.data;
        if (status === "ok") {
          dispatch(
            updateProductList({
              all: all_products,
              fruits: fruitOnly,
              veg: vegetables,
            })
          );
          // setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <>
      <ModalSearch />
      <Hero />
      <FeatureSection />
      <FruitShops />
      <Features />
      <Banner />
      <Facts />
      <Testimonial />
    </>
  );
};

export default Home;
