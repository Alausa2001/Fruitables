// Home page
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
