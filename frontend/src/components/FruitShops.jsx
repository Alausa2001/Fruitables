import { Link } from "react-router-dom";
import { FruitCard } from "./Cards";


function FruitShops() {
  const items = [
    {
      img: "/assets/fruite-item-5.jpg",
      category: "Fruits",
      name: "Grapes",
      info: "Plenty nutrients that makes it a healthy choice, and an excellent way to get Vitamin C",
      price: 2.99,
    },
    {
      img: "/assets/fruite-item-3.jpg",
      category: "Fruits",
      name: "Bananas",
      info: "Contains a fair amaount of carbs, water, fiber, and antioxidants but little protein and no fat",
      price: "$4.99",
    },
    {
      img: "/assets/fruite-item-2.jpg",
      category: "Fruits",
      name: "Raspberries",
      info: "They are low in calories, but in high in fiber. May protect against diabetes,cancer,obesity.",
      price: "£4.99",
    },
    {
      img: "/assets/vegetable-item-5.jpg",
      category: "Vegetables",
      name: "Potatoes",
      info: "excellent sources of vitamin C and minerals.",
      price: "£2.99",
    },
    {
      img: "/assets/vegetable-item-6.jpg",
      category: "Vegetables",
      name: "Mint",
      info: "Helps with digestive health, reducing allergic symptoms, good for cold symptoms ",
      price: "$4.99",
    },
    {
      img: "/assets/vegetable-item-4.jpg",
      category: "Vegetables",
      name: "Bell Pepper",
      info: "Rich in antioxidants, and may help to protect against certain chronic diseases",
      price: "£4.99",
    },
    {
      img: "/assets/vegetable-item-1.jpg",
      category: "Vegetables",
      name: "Tomatoes",
      info: "excellent sources of vitamins and minerals",
      price: "£2.99",
    },
    {
      img: "/assets/fruite-item-1.jpg",
  
      category: "Fruits",
      name: "Oranges",
      info: "Boosts immune system, youragainst germs, helps your against collagens.",
      price: "$4.99",
    },
    {
      img: "/assets/fruite-item-6.jpg",
  
      category: "Fruits",
      name: "Apples",
      info: "A good source of nutrients, including fiber,Vitamin C, and antioxidants which helps to support healthy digestion",
      price: "£4.99",
    },
  ];
  
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-className text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item">
                  <Link
                    className="d-flex m-2 py-2 bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    to="/#tab-1"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      All Products
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    to="/#tab-2"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Vegetables
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    to="/#tab-3"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {items.map(item => <FruitCard key={item.name} fruit={item} />) }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitShops;
