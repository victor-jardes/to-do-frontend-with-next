import React from "react";
import InputWriteTask from "./components/InputWriteTask";
import ButtonAddTask from "./components/ButtonAddTask";
import { InputsWraper } from "./styles/inputsTodo.style";

export default function InputsTodo() {
  return (
    <InputsWraper>
      <InputWriteTask />
      <ButtonAddTask />
    </InputsWraper>
  );
}
