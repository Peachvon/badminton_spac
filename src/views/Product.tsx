import React from "react";

export default function Product() {
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

  return <div onClick={() => increment()}>Product {count}</div>;
}
