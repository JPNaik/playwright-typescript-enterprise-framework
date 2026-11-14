# Enterprise Playwright + TypeScript Test Automation Framework

Production-grade end-to-end UI and API test automation framework built with **Playwright** and **TypeScript**, targeting [Automation Exercise](https://automationexercise.com).

## Architecture & Key Features

* **Page Object Model (POM):** Modular, typed page classes inheriting from an abstract `BasePage` with user-facing locators (`getByRole`, `data-qa`).
* **Dependency Injection via Custom Fixtures:** Eliminates manual page instantiation and boilerplate hooks (`src/fixtures/page.fixture.ts`).
* **Hybrid API + UI Testing:** Uses Playwright's `APIRequestContext` (`UserApiClient`) to provision and tear down test accounts via REST APIs in milliseconds, isolating UI assertions.
* **Parallel-Safe Dynamic Data Factory:** Generates collision-free user payloads (`DataFactory`) for multi-browser parallel execution across Chromium, Firefox, and WebKit.
* **CI/CD Ready:** Configured with GitHub Actions workflow, TypeScript static type-checking (`tsc --noEmit`), retries, and automated HTML/Trace artifact uploads on failure.

## Project Structure

```text
├── .github/workflows/   # GitHub Actions CI/CD pipeline
├── config/              # Typed environment configuration
├── src/
│   ├── api/             # REST API clients for fast test setup/teardown
│   ├── data/            # Static JSON test datasets
│   ├── fixtures/        # Custom Playwright test fixtures & network interceptors
│   ├── pages/           # Page Object Models
│   └── utils/           # Dynamic data factories & helpers
├── tests/
│   ├── auth/            # Authentication & registration E2E specs
│   └── products/        # Product search & shopping cart E2E specs
├── playwright.config.ts # Multi-browser runner & reporting configuration
└── tsconfig.json        # Strict TypeScript compiler & path alias setup