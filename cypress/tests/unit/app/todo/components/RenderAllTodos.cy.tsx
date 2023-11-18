/// <reference types="cypress" />

import React from "react";
import RenderAllTodos from "@/app/todo/components/list/RenderAllTodos";
import { ITodo } from "@/types/ITodo";
import { rest } from "msw";
import { mswWorker } from "@/apiMocks/mswWorker";
import useTodos from "@/app/states/todo/useTodo";

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

    cy.mountTodoApp(<RenderAllTodos />);
    cy.get(EMPTY_VALUE_RENDER).should("be.visible", true);
  });

  describe("when contain tasks", () => {
    const myValues: ITodo[] = MY_ALL_TODOS;

    beforeEach(() => {
      mswWorker.use(
        rest.get("http://localhost:3001/todo/findAll", (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(myValues));
        })
      );

      useTodos.getState().fetchAllTodos();
    });
    it("should be able render `<ul>` tag and `<li>` with `<button>` element in list", () => {
      const DATA_TESTID_LIST_WITH_TODOS =
        "[data-testid='data-test-list-with-todos']";

      cy.mountTodoApp(<RenderAllTodos />);

      cy.get(DATA_TESTID_LIST_WITH_TODOS)
        .should("be.visible")
        .then(($el) => {
          expect($el.children("div").children("li").length).to.equal(3);
          return $el.children("div").children("li");
        })
        .as("allLis");

      cy.get("@allLis").and(($el) => {
        expect($el[0].textContent).to.equal("wash to car");
        expect($el[0].id).to.equal("1");

        expect($el[1].textContent).to.equal("study English");
        expect($el[1].id).to.equal("2");

        expect($el[2].textContent).to.equal("clear my room");
        expect($el[2].id).to.equal("3");
      });

      cy.get(DATA_TESTID_LIST_WITH_TODOS)
        .should("be.visible")
        .then(($el) => {
          console.log($el.children());
          expect($el.children("div").children("button").length).to.equal(3);
          return $el.children("div").children("button");
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
});
