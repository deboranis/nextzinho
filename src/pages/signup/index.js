import Form from "../components/Form";
import { useState } from "react";

export default function SignUp() {
  // valor atual, mudar valor
  const [ botao, setBotao ] = useState(false);
  function handleClick() {
    setBotao(!botao);
  }
  return (
    <>
      <button onClick={handleClick}>Mostrar form</button>
      {botao && <Form />}
    </>
  )
}