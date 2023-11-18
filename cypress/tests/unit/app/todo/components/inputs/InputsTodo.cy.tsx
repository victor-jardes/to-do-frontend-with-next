/// <reference types="cypress" />

import React from "react";
import InputsTodo from "@/app/todo/components/inputs/InputsTodo";

describe("Inputs `todo` components", () => {
  it("should be able render inputs in page and your functions", () => {
    const DATA_TESTID_INPUT_WRITE_TASK = "[data-testid='data-test-write-todo']";
    const DATA_TESTID_BUTTON_ADD_TODO =
      "[data-testid='data-test-button-add-todo']";

    cy.mountTodoApp(<InputsTodo />);

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should("be.visible");
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("be.visible");

    cy.get(DATA_TESTID_INPUT_WRITE_TASK)
      .click()
      .type("w")
      .get(DATA_TESTID_BUTTON_ADD_TODO)
      .should("be.disabled")
      .get(DATA_TESTID_INPUT_WRITE_TASK)
      .clear();

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).type("wa");
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("be.enabled");
    cy.get(DATA_TESTID_INPUT_WRITE_TASK).clear();
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("be.disabled");

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).type("wash to car");
    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should("have.value", "wash to car");

    cy.get(DATA_TESTID_BUTTON_ADD_TODO).click();
    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should("have.value", "");
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("be.disabled");
  });
});
