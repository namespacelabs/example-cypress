// Copyright 2022 Namespace Labs Inc; All rights reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.

describe("My First Test", () => {
	it("Smoke", () => {
		// Visit the home page.
		// The environment variable is injected by Namespace, see below.
		cy.visit("http://" + Cypress.env("ROOT_HOST"));

		// Verify that the page contains the expected text, fetched from the backend.
		cy.contains("Hello, Bob!");
	});
});
