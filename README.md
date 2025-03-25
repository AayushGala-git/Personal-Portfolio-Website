# Aayush Gala's Portfolio

A modern, responsive portfolio website built with Angular and Material You design principles, showcasing my skills and experience as an AI/ML Developer, Data Scientist, and Software Engineer.

![Portfolio website banner](src/assets/img/banner.jpg?raw=true "Material You portfolio banner")

## Features

- Material You design with dynamic theming
- Responsive layout for all device sizes
- Interactive components showcasing:
  - Skills and expertise
  - Projects portfolio
  - Professional experience
  - Education and research
- Light/dark mode toggle
- Modern Angular implementation (currently on Angular 19)

## Technologies Used

- **Frontend**: Angular 19, TypeScript, HTML5, SCSS
- **Design**: Material You design system
- **Deployment**: Angular CLI, npm

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)
- [Angular CLI](https://angular.io/cli) (v14.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200/
   ```

The application will automatically reload if you change any of the source files.

### Build for Production

To build the project for production deployment:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Deployment Options

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```

4. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

### GitHub Pages

1. Install angular-cli-ghpages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build the project with your GitHub Pages base URL:
   ```bash
   ng build --configuration production --base-href="https://username.github.io/repository-name/"
   ```

3. Deploy to GitHub Pages:
   ```bash
   npx angular-cli-ghpages --dir=dist/portfolio
   ```

## Acknowledgments

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1, and is currently maintained with Angular 19.

Material You design principles are based on Google's [Material Design 3](https://m3.material.io/).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
