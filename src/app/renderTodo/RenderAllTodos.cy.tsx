import React from "react";
import RenderALlTodos from "./RenderAllTodos";
import { ITodo } from "@/@types/todo";

describe("<RenderALlTodos />", () => {
  it("should be able rendering `empty` conditional function containing `<p>` tag HTML", () => {
    const EMPTY_VALUE_RENDER = "[data-testid='data-test-empty-value']";

    cy.mountTodoApp(<RenderALlTodos todos={[]} finishedTodo={cy.spy()} />);
    cy.get(EMPTY_VALUE_RENDER).should("be.visible", true);
  });

  it.only("should be able render with `task` with props", () => {
    const spyFun = cy.spy().as("spyFunc");
    const myValues: ITodo[] = [];
    const DATA_TESTID_LIST_WITH_TODOS =
      "[datat-testid='data-test-list-with-todos']";

    cy.fixture("myTodosExemple.json").then((todo: ITodo[]) => {
      for (let i = 0; i < todo.length; i += 1) {
        myValues.push(todo[i]);
      }
      cy.mountTodoApp(
        <RenderALlTodos todos={myValues} finishedTodo={spyFun} />
      );

      cy.get(DATA_TESTID_LIST_WITH_TODOS)
        .should("be.visible")
        .and(($el) => {
          expect($el[0].tagName).to.equal("UL");
        })
        .children("li")
        .and("have.length", myValues.length);

      cy.get(DATA_TESTID_LIST_WITH_TODOS)
        .should("be.visible")
        .children()
        .each(($el) => {
          const DATA_TESTID_ITEM_IN_LIST = `[data-testid='data-test-item-in-list-${$el.attr(
            "id"
          )}']`;
          const DATA_TESTID_BUTTON_COMPLET_TODO = `[data-testid='data-test-button-complet-${$el.attr(
            "id"
          )}']`;
          cy.get(DATA_TESTID_ITEM_IN_LIST)
            .should("be.visible")
            .and("have.attr", "id")
            .and("equal", $el.attr("id"));

          cy.get(DATA_TESTID_BUTTON_COMPLET_TODO)
            .should("be.visible")
            .and("have.value", $el.attr("id"))
            .and("have.text", "COMPLET")
            .click();
        });
    });
  });
});
