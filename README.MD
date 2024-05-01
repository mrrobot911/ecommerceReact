# eCommerce-Application

Welcome to our eCommerce application! This platform replicates real-world shopping experiences in a digital environment 🏪. It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. From product discovery to checkout, the application ensures a smooth journey for the user, enhancing their engagement and boosting their purchasing confidence 🚀.

Users can browse through a vast range of products 📚👗👟, view detailed descriptions, add their favorite items to the basket 🛒, and proceed to checkout 💳. It includes features such as user registration and login 📝🔐, product search 🔍, product categorization, and sorting to make the shopping experience more streamlined and convenient.

An important aspect of our application is that it's responsive 📲, ensuring it looks great on various devices with a minimum resolution of 390px. This feature makes the shopping experience enjoyable, irrespective of the device users prefer.

Key pages in the application include:

- Login and Registration pages 🖥️
- Main page 🏠
- Catalog Product page 📋
- Detailed Product page 🔎
- User Profile page 👤
- Basket page 🛒
- About Us page 🙋‍♂️🙋‍♀️
  The application is powered by CommerceTools 🌐, a leading provider of commerce solutions for B2C and B2B enterprises. CommerceTools offers a cloud-native, microservices-based commerce platform that enables brands to create unique and engaging digital commerce experiences.

The application is to be developed in teams of three 👨‍💻👩‍💻👨‍💻. Don't forget to register your team on the RS School App via this link before you start working on the project.

## Technology Stack 💻📚

- **React**: Utilized for building dynamic user interfaces. React provides an efficient and convenient way to develop interactive components.
- **Redux Toolkit**: For efficient state management, we employ Redux Toolkit. It offers convenient tools for organizing the application's data store and managing complex application states.
- **Tailwind CSS**: To style the user interface, we adhere to the approach based on Tailwind CSS. This allows us to quickly and flexibly create styled components, following the principles of responsive design.

## Available scripts

- **dev**: This script runs Vite in development mode. Vite is a build tool that serves your code via native ES Module imports during development, providing an extremely fast development server with hot module replacement (HMR) support.
- **build**: This script compiles TypeScript files using the TypeScript compiler (tsc) and then triggers Vite to build the project for production. It generates optimized assets for deployment.
- **lint**: This script runs ESLint to lint TypeScript and TypeScript React files in the project directory. It enforces coding standards and identifies potential issues in the codebase. The **--report-unused-disable-directives** flag ensures that ESLint reports unused eslint-disable directives, while **--max-warnings 0** ensures that the script fails if there are any warnings.
- **lint-fix**: This script runs ESLint with the --fix option, attempting to automatically fix linting errors and enforce consistent code style throughout the project.
- **preview**: This script launches Vite in preview mode, allowing you to preview the production build locally before deployment. It serves the optimized production assets from the build output directory.
- **prepare**: This script is triggered by npm before the package is installed and whenever dependencies change. In this case, it's used to set up Husky, which is a tool for managing Git hooks.
- **test**: This script runs vitest, which is likely a custom test runner specific to your project. It executes tests to ensure that the application behaves correctly and maintains expected functionality across changes.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node Package Manager) or yarn
- Git

### Setup

1. **Clone the Repository**:
   `git clone <repository_url>`
2. **Navigate to the Project Directory**:
   `cd <project_directory>`
3. **Install Dependencies**:
   If you're using npm:
   `npm install`
   If you're using yarn:
   `yarn install`

### Development

To run the project in development mode:

```bash
npm run dev # or yarn dev
```
This command starts the development server using Vite. You can access the project in your browser at http://localhost:5173.

### Building for Production

To build the project for production:

```bash
npm run build # or yarn build
```
This command compiles TypeScript files using tsc and then triggers Vite to build the project for production. The optimized assets will be generated in the dist directory.

### Testing

To run tests:

```bash
npm test # or yarn test
```
This command executes the test suite using vitest or any other custom test runner specific to your project.

### Linting

To lint the codebase:

```bash
npm run lint # or yarn lint
```
This command runs ESLint to enforce coding standards and identify potential issues in the TypeScript and TypeScript React files.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview # or yarn preview
```
This command launches Vite in preview mode, serving the optimized production assets from the dist directory. You can access the preview in your browser at http://localhost:4173.

## Contributing

If you'd like to contribute to the project, please make sure to follow the project's contribution guidelines and coding standards.
