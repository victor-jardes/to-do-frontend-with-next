/// <reference types="cypress" />

import InputWriteTask from "@/app/todo/components/inputs/InputWriteTask";
import React from "react";

describe("test `InputWriteTask` component", () => {
  it("should be able render", () => {
    const GET_BY_PLACEHOLDER = "[placeholder='Write your task here']";
    const WRITE_FIRST_TASK = "Study English";
    const PLACEHOLDER_TEXT = "Write your task here";

    cy.mountTodoApp(<InputWriteTask />);

    cy.get(GET_BY_PLACEHOLDER).as("inputWriteTask");

    cy.get("@inputWriteTask").should("be.visible").should("be.empty");

    cy.get("@inputWriteTask")
      .click()
      .type(WRITE_FIRST_TASK)
      .should("have.value", WRITE_FIRST_TASK)
      .clear()
      .should("have.value", "")
      .should("have.attr", "placeholder", PLACEHOLDER_TEXT);
  });
});
