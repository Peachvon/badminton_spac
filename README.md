# My Node App

This project is a simple Node.js application built with Express and TypeScript. It serves an HTML page styled with Tailwind CSS.

## Project Structure

```
my-node-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── index.ts          # Controller for handling requests
│   ├── routes
│   │   └── index.ts          # Route definitions
│   ├── views
│   │   └── index.html        # Main HTML view
│   └── types
│       └── index.ts          # Type definitions
├── public
│   ├── css
│   │   └── tailwind.css      # Compiled Tailwind CSS styles
├── package.json               # NPM package configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-node-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Compile TypeScript:**
   ```
   npm run build
   ```

4. **Run the application:**
   ```
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

This application serves a single page that is styled using Tailwind CSS. You can modify the HTML in `src/views/index.html` and the styles in `public/css/tailwind.css` to customize the appearance of your application.

## License

This project is licensed under the MIT License.