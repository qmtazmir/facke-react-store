import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  console.log(props.product);
  const { setCartCount, cutCartCount } = props;
  return (
    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="col-md-4">
      <div className="card p-3 border">
        <img className="w-50 m-auto" src={props.product.image} alt="" />
        <h1>{props.product.title.slice(0, 10)}</h1>
        <div className="d-flex justify-content-around ">
          <button onClick={setCartCount} className="btn btn-success">
            Add to Cart
          </button>
          {/* cutCartCount */}
          <button onClick={cutCartCount} className="btn btn-dark">
            Delete
          </button>
          {/* <button className="btn btn-info">Details</button> */}
          <ReactModal product={props.product}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
