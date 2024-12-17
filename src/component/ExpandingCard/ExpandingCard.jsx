import "../ExpandingCard/ExpandingCard.css";
import nike1 from "../../assets/nike1.png";
import nike2 from "../../assets/nike2.jpeg";
import nike3 from "../../assets/nike3.jpeg";
function ExpandingCard() {
  const products = [
    {
      image: nike1,
      name: "G.T. Hustle 3 Electric",
      price: "$280",
      colour: "2 Colours",
    },
    {
      image: nike2,
      name: "Alphafly 3 Electric",
      price: "$390",
      colour: "1 Colour",
    },
    {
      image: nike3,
      name: "Pegasus 41 Electric",
      price: "$220",
      colour: "3 Colours",
    },
  ];

  return (
    <div className="playground flex flex-col gap-6">
      <div className="playground-desc">
        <h1 className="text-gray-800 font-medium text-lg">
          Expanding product card
        </h1>
        <p className="font-light text-slate-500">
          Hover on the image to see the interaction. Images used from nike's
          website.
        </p>
      </div>
      <div className="playground-area rounded-2xl min-h-60 bg-white border-dashed border border-gray-300 flex items-center justify-center">
        <div className="movie-wrapper overflow-hidden flex flex-row justify-center">
          {products.map((product, index) => (
            <div
              className="movie-card rounded-lg"
              key={index}
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="movie-content">
                <h5 className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.name}
                </h5>
                <p className="font-light">
                  {product.price} <span>·</span> {product.colour}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpandingCard;
