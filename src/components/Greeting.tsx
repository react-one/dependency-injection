import React from "react";
type Props = {
  friend: string;
};
const Greeting: React.FC<Props> = ({ friend }) => {
  return <h1> Hello, {friend}</h1>;
};
export default Greeting;

