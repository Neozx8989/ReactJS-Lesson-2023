import { Rating } from "react-simple-star-rating";
import products from "../data/seed";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product(props) {
  const { id } = useParams();
  let foundProduct = {};
  if (id) {
    foundProduct = products.filter((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];
  }
  if (Object.keys(props).length > 0) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  const liked = props.wishlist.filter((wish) => wish.id === product.id)[0];
  console.log(liked);
  return (
    <div className="item">
      <div className="middle aligned content">
        <div className="header">
          <a
            onClick={() => {
              console.log("heart icon is clicked");

              if (!liked) {
                const likedProduct = {
                  id: product.id,
                  name: product.title,
                  liked: true,
                };
                props.setWishlist([...props.wishlist, likedProduct]);
              } else {
                props.setWishlist(
                  props.wishlist.filter((w) => w.id !== product.id)
                );
              }
            }}
          >
            {liked ? (
              <i className="heart outline icon"></i>
            ) : (
              <i className="heart icon"></i>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
