<div align="center">

# Teste Frontend
The Movie DB
+ [![cov](https://thejoaov.github.io/teste-front-cubos/badges/coverage.svg)](https://github.com/thejoaov/teste-front-cubos/actions)
</div>

## Setup and Running

This repository contains a Vite project that can be installed and run easily by following these simple steps:

### Prerequisites

Before starting the installation process, ensure that you have the following items installed in your system:

- Node.js: This will give you access to the npm package manager that you will use to install and run Vite.
- Visual Studio Code: This is an optional text editor, though highly recommended, as it makes writing code much easier.
### Installation

Follow the steps below to install a Vite project:

1. Clone the repository to your local machine in a directory of your choice.
```Bash
git clone https://github.com/thejoaov/teste-front-cubos.git
```

2. Navigate to the directory using the command line.
```Bash
cd teste-front-cubos
```
3. Run the following command to install the project dependencies.
```Bash
npm install
```
4. Copy `.env.example` to `.env` and put there your `VITE_API_TOKEN`, you can find your _read api token_ on [TheMovieDB settings page](https://www.themoviedb.org/settings/api).

### Running the Project
Once you have installed the project dependencies, you can start the development server using the following command:

```Bash
npm run dev
```

This command will start Vite's development server and open a new browser window displaying the running web application.

### Building the Project

When you are ready to build your project for production, run the following command:

```Bash
npm run build
```

This will create a dist folder containing your production-ready files.

### Running tests and coverage
You can run the unit tests with the following command:
```bash
npm run test
```
You can get the coverage on the terminal, or in the `./coverage` folder
```bash
npm run coverage
```