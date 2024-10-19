import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";

import { cards } from "../../service/cards";

export default function Home() {
  const navigation = useNavigate();

  return (
    <>
      {cards.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </>
  );
}
