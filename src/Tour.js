import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card" style={{ width: "75%" }}>
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 className="card-title">{name}</h5>
          <h5 className="price">${price}</h5>
        </div>
        <p className="card-text">
          {showMore ? info : info.substring(0, 200)}
          <button
            className="btn show-more"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "show less" : "see more"}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-outline-danger btnNI"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
