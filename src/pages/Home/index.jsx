import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";

export default function Home() {
  const navigation = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Button title="Cadastro" onClick={() => navigation("/cadastro")} />
      <Button title="Login" onClick={() => navigation("/login")} /> {/* <--- */}
      <Link to={"/login"}>Link Login</Link>
    </>
  );
}
