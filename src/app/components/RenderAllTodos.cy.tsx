import React from "react";
import RenderALlTodos from "./RenderAllTodos";
import { ITodo } from "@/types/ITodo";

const MY_ALL_TODOS = [
  {
    id: "1",
    description: "wash to car",
    isFinished: false,
  },
  {
    id: "2",
    description: "study English",
    isFinished: false,
  },
  {
    id: "3",
    description: "clear my room",
    isFinished: true,
  },
];

describe("<RenderALlTodos /> components", () => {
  it("should be able rendering `empty` conditional function containing `<p>` tag HTML", () => {
    const EMPTY_VALUE_RENDER = "[data-testid='data-test-empty-value']";

    cy.mountTodoApp(<RenderALlTodos todos={[]} />);
    cy.get(EMPTY_VALUE_RENDER).should("be.visible", true);
  });

  it("should be able render `<ul>` tag and `<li>` with `<button>` element in list", () => {
    const myValues: ITodo[] = MY_ALL_TODOS;
    const DATA_TESTID_LIST_WITH_TODOS =
      "[data-testid='data-test-list-with-todos']";

    cy.mountTodoApp(<RenderALlTodos todos={myValues} />);

    cy.get(DATA_TESTID_LIST_WITH_TODOS)
      .should("be.visible")
      .then(($el) => {
        expect($el.children("li").length).to.equal(3);
        return $el.children("li");
      })
      .as("allLis");

    cy.get("@allLis").and(($el) => {
      expect($el[0].textContent).to.equal("wash to car");
      expect($el[0].id).to.equal("1");
      expect($el[0].style.backgroundColor).to.equal("inherit");

      expect($el[1].textContent).to.equal("study English");
      expect($el[1].id).to.equal("2");
      expect($el[1].style.backgroundColor).to.equal("inherit");

      expect($el[2].textContent).to.equal("clear my room");
      expect($el[2].id).to.equal("3");
      expect($el[2].style.backgroundColor).to.equal("red");
    });

    cy.get(DATA_TESTID_LIST_WITH_TODOS)
      .should("be.visible")
      .then(($el) => {
        expect($el.children("button").length).to.equal(3);
        return $el.children("button");
      })
      .as("allButtons");

    cy.get("@allButtons").and(($el) => {
      console.log($el[0]);

      const btnComple = "button-complet";
      expect($el[0].id).to.equal(`${btnComple}-1`);
      expect($el[0].getAttribute("value")).to.equal("1");
      expect($el[0].textContent).to.equal("COMPLET");

      expect($el[1].id).to.equal(`${btnComple}-2`);
      expect($el[1].getAttribute("value")).to.equal("2");
      expect($el[1].textContent).to.equal("COMPLET");

      expect($el[2].id).to.equal(`${btnComple}-3`);
      expect($el[2].getAttribute("value")).to.equal("3");
      expect($el[2].textContent).to.equal("COMPLET");
    });
  });
});
