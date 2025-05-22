import React from "react";

interface ProductProps {
  product: { id: number; name: string };
}

export default function ProductPage({ product }: ProductProps) {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    console.log("increment");
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div onClick={() => increment()}>
      Product {count}
      {product?.name}
    </div>
  );
}

export function getProductSsrProp(): ProductProps {
  return { product: { id: 1, name: "iPhone" } };
}
