# Articles Seeker

**Articles Seeker** is a web application that allows users to search and browse through articles based on a topic of their choice. The frontend is built using React, TypeScript, and Material-UI, and it communicates with a backend server to fetch the articles.


## Requirements

To run this project locally, you'll need the following:

- **Node.js** (version 20.x or higher)
- **npm** (version 10.x or higher)
- **React** (version 18.x or higher)

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/yourusername/articles-seeker.git
   cd articles-seeker
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

## Running the Application

### Development

To run the application in development mode, use the following command:

```
npm run dev
```

This will start the app using Vite and provide a link to open it in your browser. The app will automatically reload if you make changes to the code.

### Linting

To lint the code and check for any issues, use the following command:

```
npm run lint
```

This will run ESLint on the codebase.

### Production

To build the application for production, use:

```
npm run build
```

This command will first compile TypeScript and then create an optimized build of the application using Vite in the `dist` directory, ready to be deployed.

### Preview

To preview the production build locally, use:

```
npm run preview
```

This will serve the production build locally on your machine, allowing you to preview it before deployment.


## Project Structure

Here's an overview of the project's structure:

```
/src
├── components     # Reusable UI components
├── hooks          # Custom React hooks
├── pages          # Application pages
├── types          # TypeScript types and interfaces
├── App.tsx        # Main application component
├── Context.tsx    # React Context initialization
└── main.tsx       # Entry point for the React app
```

## API Integration

The frontend interacts with the backend server to fetch articles based on the topic input by the user. The requests are handled using the `axios` library, and custom hooks are used to manage API calls and state.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Issues

If you encounter any issues or have any questions, feel free to open an issue in the repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Backend Repository

The backend part of this project is available at the following link:

[Articles Seeker Backend](https://github.com/arseniypom/articles-seeker-be)
