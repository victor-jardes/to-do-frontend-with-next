/// <reference types="cypress" />

import React from "react";
import InputsTodo from "../../../../../src/app/components/InputsTodo";

describe("Inputs `todo` components", () => {
  it("should be able render inputs in page and your functions and properties", () => {
    const DATA_TESTID_INPUT_WRITE_TASK = "[data-testid='data-test-write-todo']";
    const DATA_TESTID_BUTTON_ADD_TODO =
      "[data-testid='data-test-button-add-todo']";

    const INPUT_PLACEHOLDER = "EX: wash to car";

    cy.mountTodoApp(<InputsTodo />);

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should("be.visible");
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("be.visible");

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should("have.attr", "type", "text");
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("have.attr", "type", "button");

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should(
      "have.attr",
      "placeholder",
      INPUT_PLACEHOLDER
    );
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("have.value", "ADD");

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).should("be.empty");
    cy.get(DATA_TESTID_BUTTON_ADD_TODO).should("be.disabled");

    cy.get(DATA_TESTID_INPUT_WRITE_TASK).click();

    cy.get(DATA_TESTID_INPUT_WRITE_TASK)
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
