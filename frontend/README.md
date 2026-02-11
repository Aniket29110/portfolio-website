# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Animated Portfolio Website

This is a modern, animated personal portfolio website built using React, Tailwind CSS, and Framer Motion.
The project showcases a professional developer portfolio with smooth scrolling, animated sections, responsive navigation, and optional backend support for a contact form.

This project is suitable for:

Final-year academic project

Personal portfolio website

Internship and job applications

Features Overview

Modern dark-themed UI with gradient background

Sticky navigation bar with active link highlighting

Smooth scrolling between sections

Animated hero section

Staggered skills animation on scroll

Floating project cards with hover effects

Mobile-responsive navigation menu

Contact form (frontend + optional backend)

Requirements to Run This Project

Before running this project, ensure the following are installed on your system:

Node.js (recommended version 18 or above)

npm (comes with Node.js)

A code editor such as Visual Studio Code

A modern web browser (Chrome, Edge, Firefox)

Basic understanding of JavaScript and React is helpful but not mandatory.

Project Structure Explanation

The project is divided into two main parts:

Frontend
This contains the React-based portfolio website.
It handles UI, animations, navigation, and styling.

Backend (Optional)
This is a simple Node.js server used only if you want the contact form to send messages.
The frontend can run independently without the backend.

How to Run the Frontend (Portfolio Website)

Open the project folder in your code editor.

Navigate to the frontend directory using the terminal.

Install all required dependencies using npm.

Start the development server.

Open the local development URL shown in the terminal in your browser.

After this, the portfolio website will load with all animations and sections working.

Frontend Libraries Used

The frontend uses the following libraries and tools:

React for building the user interface

Vite for fast development and bundling

Tailwind CSS for styling

Framer Motion for animations

Lucide React for icons

All required packages are installed automatically when dependencies are installed.

How the Animations Work

The hero section animates when the page loads

Skills appear one-by-one when scrolled into view

Project cards slide upward and float on hover

The navbar animates into view and highlights the active section

Animations run only once for better performance

No manual configuration is required after setup.

Mobile Responsiveness

The website is fully responsive

A hamburger menu appears on smaller screens

Mobile navigation opens and closes with animation

All sections are touch-friendly

The layout automatically adapts to different screen sizes.

Running the Backend (Optional – Contact Form)

The backend is required only if you want the contact form to send messages.

To run the backend:

Open a new terminal window

Navigate to the backend directory

Install backend dependencies

Start the backend server

The backend listens for contact form submissions and logs messages.

Connecting Frontend and Backend

During development, the frontend sends messages to the local backend server

When deployed, the frontend must use the deployed backend URL

If the backend is not running, the contact form will not submit

Deployment Information

To make the project live:

The frontend can be deployed using platforms like Vercel or Netlify

The backend can be deployed using platforms like Render or Railway

A GitHub repository is required for deployment

Deployment is optional for local development.

Common Issues and Solutions

If animations are not visible, ensure all dependencies are installed correctly

If styles are missing, verify Tailwind CSS is configured properly

If the navbar overlaps content, ensure space is reserved below it

If the contact form does not work, confirm the backend server is running

Who Can Use This Project

This project is ideal for:

Computer Science students

Final-year project submissions

Frontend developers

Personal branding portfolios

Internship and job application

Copyright and License

Copyright © 2026 Ani
This project is provided for personal, educational, and portfolio use.
You are allowed to use, modify, and customize this project for your own portfolio or academic work.
Redistribution or commercial use without proper attribution is not permitted.
The software is provided “as is”, without warranty of any kind.
