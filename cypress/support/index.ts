import "./commands";

import { Runnable } from "mocha";

beforeEach(() => {
  cy.clearCookies();
});

Cypress.Commands.overwrite("should", (originalFn, actual, assertion, expected, options) => {
  if (options && options.message) {
    const listener = (error: { name: string; message: string }) => {
      error.name = "CustomError";
      error.message = options.message;
      throw error; // throw error to have test still fail
    };

    if (options.message) {
      console.log(options.message);
    }

    const removeListener = () => {
      cy.removeListener("fail", listener);
      cy.removeListener("command:end", removeListener);
    };

    cy.on("fail", listener);
    cy.on("command:end", removeListener);
  }

  return originalFn(actual, assertion, expected, options);
});

const CREATE_CUSTOM_ERROR_MESSAGE = (error: { message: string }, runnableObj: Runnable) => {
  const messageArr = [
    `Feature: ${runnableObj?.parent?.title ?? undefined}`,
    `Scenario: ${runnableObj.title}`,
    `----------`,
    `${error.message}`
  ];
  return messageArr.join("\n");
};

Cypress.on("fail", (err, runnable) => {
  const customErrorMessage = CREATE_CUSTOM_ERROR_MESSAGE(err, runnable);
  const customError = err;
  customError.message = customErrorMessage;
  throw customError;
});
