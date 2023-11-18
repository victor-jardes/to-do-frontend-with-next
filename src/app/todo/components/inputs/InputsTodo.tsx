import React from "react";
import InputWriteTask from "./InputWriteTask";
import ButtonAddTask from "./ButtonAddTask";
import { InputsWraper } from "./inputsTodo.style";

export default function InputsTodo() {
  return (
    <InputsWraper>
      <InputWriteTask />
      <ButtonAddTask />
    </InputsWraper>
  );
}
