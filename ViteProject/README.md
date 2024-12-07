# Vite CRD Application

This project is a CRD (Create, Read, Delete) application built using Vite with TypeScript. It utilizes `json-server` as a backend API and Bootstrap for styling.

## Features
- Create new entities using a form.
- View a list of existing entities.
- Delete entities from the list.

## Technologies Used
- **Vite**: Fast development build tool.
- **TypeScript**: Typed JavaScript for better development experience.
- **json-server**: Provides a simple REST API for CRUD operations.
- **Bootstrap**: Used for styling and responsive design.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YourUserName/YourRepoName.git
   cd YourRepoName
   ```

2. **Install Dependencies**
   - Run the following command to install all necessary dependencies, including Bootstrap:
   ```bash
   npm install
   npm install bootstrap
   ```

3. **Start the JSON Server**
   ```bash
   npx json-server --watch db.json --port 3000
   ```
   This will start the server on `http://localhost:3000`.

4. **Run the Vite Development Server**
   ```bash
   npm run dev
   ```
   This will start the Vite development server and open the application in your default web browser.

## TypeScript Integration

Type errors in the application were resolved by:
- Adding explicit types to DOM elements, such as `HTMLTableSectionElement`, `HTMLFormElement`, `HTMLInputElement`, and `HTMLButtonElement`.
- Specifying types for function parameters, particularly for event handlers using `Event`.
- Defining the expected type of data returned from API calls as an array of objects with `id` and `name`.
- Ensuring global functions are accessible by attaching them to the `window` object with `(window as any)`.

These changes enhance type safety and improve code readability.
