# Stardoll Voting Automation

## Overview

This project utilizes the Selenium WebDriver to automate the process of voting on Stardoll, a popular online fashion and dress-up game. The script is designed to perform several actions, including logging in, navigating to the design page, scrolling to the bottom, accessing the favorites, and voting ten times in succession.

## Prerequisites

Before running the script, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Google Chrome](https://www.google.com/chrome/)

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run the following command to install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and provide your Stardoll login credentials:

   ```env
   LOGIN=your_username
   PASSWORD=your_password
   ```

## Running the Script

Execute the following command to run the script:

```bash
node server.js
```

This will launch the Selenium WebDriver, navigate to Stardoll, and perform the automated voting process.

## Code Organization

- **server.js**: Main script file containing the automation logic.
- **.env**: Configuration file for storing sensitive data, such as login credentials.
- **node_modules/**: Directory containing Node.js dependencies.
- **package.json**: Configuration file for npm packages and scripts.

## Technologies Used

- **Selenium WebDriver**: Used for automating web browser interactions.
- **Node.js**: JavaScript runtime environment.
- **dotenv**: Library for loading environment variables from a `.env` file.

## Script Architecture

The script is organized into several functions, each responsible for a specific action:

- `login`: Initiates the login process by clicking the login button and entering credentials.
- `navigateToDesignPage`: Navigates to the design page within Stardoll.
- `scrollToBottom`: Scrolls to the bottom of the page to reveal additional content.
- `navigateToFavorites`: Accesses the favorites section.
- `voteTenTimes`: Performs the voting action ten times in succession.

The main function, `StardollVote`, orchestrates these actions in a sequential manner.
