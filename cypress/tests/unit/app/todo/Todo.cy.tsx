/// <reference types="cypress" />

import React from "react";
import Todo from "../../../../../src/app/todo/Todo";

describe("Render `Todo` component, and your childrens with your functions", () => {
  it("should be able reder `Input...` and `Render...` components", () => {
    cy.mountTodoApp(<Todo />);

    cy.get("[data-testid='data-test-write-todo']").as("inputWrite");
    cy.get("[data-testid='data-test-button-add-todo']").as("btnAdd");
    cy.get("[data-testid='data-test-list-with-todos']").as("ulList");
    cy.get("[data-testid='data-test-empty-value']").as("emptyTag");

    cy.get("@inputWrite")
      .should("be.visible")
      .and(($el) => {
        expect($el.attr("value")).to.equal("");
      });

    cy.get("@btnAdd")
      .should("be.visible")
      .and(($el) => {
        expect($el[0].tagName).equal("INPUT");
        expect($el.attr("type")).equal("button");
        expect($el.attr("value")).to.equal("ADD");
      });

    cy.get("@ulList").should("not.be.visible");

    cy.get("@emptyTag")
      .should("be.visible")
      .and(($el) => {
        expect($el[0].textContent).to.equal("empty...");
      });

    cy.get("@inputWrite")
      .type("wash to car")
      .then(($el) => {
        expect($el.attr("value")).to.equal("wash to car");
      });

    cy.get("@btnAdd").click();
    cy.get("@inputWrite").should("have.value", "");

    cy.get("@ulList")
      .should("be.visible")
      .and(($el) => {
        expect($el.children("li").length).to.equal(1);
        expect($el.children("li")[0].textContent).to.equal("wash to car");
        expect($el.children("button").length).to.equal(1);
        expect($el.children("button")[0].textContent).to.equal("COMPLET");
      });

    cy.get("@ulList")
      .should("be.visible")
      .children("button")
      .then(($el) => {
        return cy.get(`#button-complet-${$el[0].value}`);
      })
      .as("firstBtnComplet");
    cy.get("@firstBtnComplet").click();

    cy.get("@ulList")
      .should("be.visible")
      .should("be.visible")
      .then(($el) => {
        return $el.children("li")[0];
      })
      .as("firstLi");
    cy.get("@firstLi").and(($el) => {
      expect($el[0].style.backgroundColor).to.equal("red");
    });

    cy.get("@firstBtnComplet").click();

    cy.get("@firstLi").and(($el) => {
      expect($el[0].style.backgroundColor).to.equal("inherit");
    });

    cy.get("@inputWrite").type("cleaning my room");
    cy.get("@btnAdd").click();

    cy.get("@ulList")
      .should("be.visible")
      .and(($el) => {
        expect($el.children("li").length).to.equal(2);
        expect($el.children("li")[1].textContent).to.equal("cleaning my room");
        expect($el.children("button").length).to.equal(2);
        expect($el.children("button")[1].textContent).to.equal("COMPLET");
      });

    cy.get("@ulList")
      .should("be.visible")
      .children("button")
      .then(($el) => {
        return cy.get(`#button-complet-${$el[1].value}`);
      })
      .as("secondBtnComplet");

    cy.get("@secondBtnComplet").click();

    cy.get("@ulList")
      .should("be.visible")
      .children("li")
      .and(($el) => {
        return $el[1];
      })
      .as("secondLi");

    cy.get("@secondLi").and(($el) => {
      expect($el[1].style.backgroundColor).to.equal("red");
    });

    cy.get("@secondBtnComplet").click();

    cy.get("@secondLi").and(($el) => {
      expect($el[1].style.backgroundColor).to.equal("inherit");
    });
  });
});
