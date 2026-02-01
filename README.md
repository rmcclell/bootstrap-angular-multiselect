# bootstrap-angular-multiselect

A **standalone Angular** implementation of the [PrimeNG MultiSelect](https://primeng.org) component, rebuilt from the ground up to use [Bootstrap](https://getbootstrap.com) as its only external dependency.

## 🚀 Goal
The primary goal of this project is to provide a lightweight, Bootstrap-native alternative to the [PrimeNG MultiSelect](https://primeng.org) while maintaining **1:1 API parity**. This allows developers to transition between packages seamlessly without changing component logic or template structures.

*   **Source Code:** [rmcclell/bootstrap-angular-multiselect](https://github.com)
*   **Original Blueprint:** [PrimeNG Official Site](https://primeng.org)

## 🛠 Features
- **Zero PrimeNG Overhead:** No need to import `primeng` or `primeicons`.
- **Bootstrap Driven:** Uses standard [Bootstrap 5](https://getbootstrap.comdocs/5.0/getting-started/introduction/) classes for styling and layout.
- **Identical API:** Every `@Input()` and `@Output()` is mirrored from the [original documentation](https://primeng.org).
- **Template Support:** Supports custom content projection for items, headers, and footers.

## 📋 API Mirror
This library implements the [PrimeNG API](https://primeng.org) exactly to ensure compatibility:

| Input / Output | Type | Description |
| :--- | :--- | :--- |
| `options` | `any[]` | An array of objects to display as options. |
| `optionLabel` | `string` | Property name to use as the label. |
| `optionValue` | `string` | Property name to use as the value. |
| `filter` | `boolean` | Whether to show the search/filter input. |
| `display` | `string` | Defines how to show selected items (`comma` or `chip`). |
| `onChange` | `EventEmitter` | Callback to invoke when value changes. |

## 🤝 Attribution & Credit
This project is a Bootstrap-based port of the [MultiSelect component](https://primeng.org) developed by [PrimeTek](https://www.primetek.com.tr). 

We extend our deep gratitude to the [PrimeNG Team](https://github.com) for their industry-leading UI/UX patterns. This implementation follows the functional logic established by the original creators to ensure a familiar developer experience.

## 🤖 Built with Intelligence
This project’s documentation, deployment architecture, and GitHub integration were refined with the assistance of **Google Antigravity Editor** and **Gemini**. These tools helped ensure the [Bootstrap-native implementation](https://github.com) maintains strict [PrimeNG API parity](https://primeng.org) while streamlining the transition to a standalone [Angular](https://angular.dev) architecture.


# Bootstrap Angular MultiSelect

[![Live Demo](https://img.shields.io)](https://rmcclell.github.io/bootstrap-angular-multiselect/)
[![License: MIT](https://img.shields.io)](https://opensource.org)

A lightweight, **standalone Angular** version of the [PrimeNG MultiSelect](https://primeng.org) designed to work exclusively with [Bootstrap](https://getbootstrap.com).

## 🌟 Why this exists?
Standard [PrimeNG](https://primeng.org) components often require a large suite of dependencies (`primeng`, `primeicons`, `primeflex`). This project provides a **1:1 API mirror** of the MultiSelect component, stripped down to use only [Bootstrap 5](https://getbootstrap.com) for styling. It’s perfect for projects that want the PrimeNG developer experience without the extra bundle bloat.

## 🚀 [Live Demo](https://rmcclell.github.io/bootstrap-angular-multiselect/)
Check out the component in action, styled entirely with Bootstrap.

## 📦 Installation
```bash
npm install bootstrap-angular-multiselect
```

## Screeshot of Demo

<img width="1920" height="3930" alt="Screenshot 2026-02-01 at 01-03-42 Demo" src="https://github.com/user-attachments/assets/9e385aca-2497-426d-a6ae-0c0cfe68ee09" />

<img width="1580" height="613" alt="Screenshot 2026-01-31 at 22-34-02 Demo-1-chips" src="https://github.com/user-attachments/assets/c7899c24-840e-45cd-ba68-aef9d19cf43e" />
<img width="1585" height="348" alt="Screenshot 2026-02-01 at 00-08-26 Demo-filtering" src="https://github.com/user-attachments/assets/861c5228-4613-4079-9e58-e14ae53bfa23" />
<img width="1572" height="557" alt="Screenshot 2026-02-01 at 00-13-11 Demo-grouping" src="https://github.com/user-attachments/assets/71dd1306-4ef2-4e75-b474-b05502f33667" />
<img width="1581" height="538" alt="Screenshot 2026-02-01 002012-custom-template" src="https://github.com/user-attachments/assets/eed5ad0d-fc37-498a-ac99-ff98b414267c" />

<img width="1920" height="2662" alt="Screenshot 2026-02-01 at 00-22-07 Demo" src="https://github.com/user-attachments/assets/68fbf1b9-74a7-440e-b9d2-17d88b68ca7a" />

---
*Maintained by [rmcclell](https://github.com). Licensed under MIT.*

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Development server

To start a local development server, run:

```bash
npm start
# or
npx ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
# or
npx ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm test
# or
npx ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.








