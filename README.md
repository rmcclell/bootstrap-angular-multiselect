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

## Screeshot of Demo

<img width="1920" height="11535" alt="Screenshot 2026-01-31 at 22-34-02 Demo" src="https://github.com/user-attachments/assets/57f4c0b4-24d8-4560-835d-2f55c4b883de" />

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


