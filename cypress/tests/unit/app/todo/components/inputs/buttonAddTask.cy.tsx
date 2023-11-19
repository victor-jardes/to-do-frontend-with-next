/// <reference types="cypress" />

import React from "react";
import ButtonAddTask from "@/app/todo/components/inputs/ButtonAddTask";

describe("test `ButtonAddTask` component", () => {
  it("should be able render", () => {
    const GET_BUTTON_BY_TEXT = "";
    const DATA_TESTID_BUTTON_ADD_TODO =
      "[data-testid='data-test-button-add-todo']";
    cy.mountTodoApp(<ButtonAddTask />);

    cy.get(DATA_TESTID_BUTTON_ADD_TODO).as("buttonAddTask");

    cy.get("@buttonAddTask")
      .should("be.visible")
      .should("be.disabled")
      .should("have.attr", "type", "button")
      .should("have.value", "ADD");
  });
});
