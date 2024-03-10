# Motivation Website Frontend

## Author
- Andrew Skevington-Olivera

## Introduction

The Motivation Website Frontend is the interactive user interface for the Motivation Website Backend, designed to provide a comprehensive and engaging user experience. Built using Angular, this frontend application showcases a variety of functionalities including user authentication, task management, dynamic content display, and more. This README outlines the features, technologies used, project structure, and setup instructions.

## Features

- **User Authentication**: Facilitates secure login and signup processes, managing user sessions effectively.
- **Dynamic GIF Display**: Incorporates a gif-display component for visual engagement.
- **Navigation and Routing**: Utilizes a header component for navigation between different pages.
- **Home Page Widgets**: Features progress, time, and weather widgets to provide useful information at a glance.
- **Novel Chapters Retrieval**: Allows users to enter a novel link to fetch and display chapters.
- **Task Management**: Supports the creation, display, and management of tasks, integrating closely with the backend to reflect completion percentages and urgency.
- **Dark Mode**: Offers a toggleable dark mode for user preference.
- **Weather Information**: Displays current weather details for Sarasota, leveraging the OpenWeatherMap API.

## Technologies and Tools

- **Angular**: A platform and framework for building single-page client applications using HTML and TypeScript.
- **Angular Material**: Material Design components for Angular, used to create a cohesive and modern UI.
- **RxJS**: A library for reactive programming using observables, making it easier to compose asynchronous or callback-based code.
- **OpenWeatherMap API**: For fetching real-time weather information.
- **Various Angular Modules**: Such as HttpClientModule for making HTTP requests and RouterModule for app routing.

## Project Structure Overview

- **src/app/auth**: Authentication components for login and signup functionalities.
- **src/app/gif-display**: Component for displaying GIFs.
- **src/app/header**: Navigation component handling redirects between pages.
- **src/app/home**: Home page component displaying widgets like progress-widget, time-widget, and weather-widget.
- **src/app/novels**: Component for novel chapters retrieval functionality.
- **src/app/tasks**: Manages task-item components and handles task-related API interactions.
- **src/app/widgets**: Contains individual widget components like progress-widget, time-widget, and weather-widget.
- **src/app/services**: Services for handling API requests (auth, gpt, novels, tasks, weather-service).
- **src/environments**: Contains Angular environment configurations.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- Angular CLI installed
- Access to the backend server (ensure the Motivation Website Backend is running)

### Installation

1. Clone the repository: `git clone https://github.com/AndrewASO/motivationWebsite`.
2. Navigate to the project directory: `cd motivationWebsite`.
3. Install dependencies: `npm install`.

### Running the Project

To start the development server:
```bash
ng serve
