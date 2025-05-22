import React from "react";

interface UserProps {
  user: { id: number; name: string };
}
export default function Page({ user }: UserProps) {
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
    <>
      <title>Home</title>
      <div className="bg-black" onClick={() => increment()}>
        Home {count}
      </div>
      <br />
      <div> asd{user?.name}</div>
    </>
  );
}
export function getIndexSsrProp(): UserProps {
  return { user: { id: 1, name: "peach" } };
}
