# Marketplace_Prototype
Welcome to REgen - an ecosystem of a multi-fuel trading market and services relevant to the New Fuel Economy (Hydrogen, Ammonia & Methanol)

For more information on how the REgen trading platform works, please view the following platform demo video: Product: https://drive.google.com/file/d/1xVNlNbz8RPEdvXXxUnRzeOidKtHu8ydW/view?usp=drive_link,

For a full pitch deck on our company and solutions, please refer to our deck at: https://drive.google.com/file/d/1JqwWx0aNx8fn9VZz3rwzfP5MXKg1MfFN/view?usp=drive_link

The project has 2 subfolders -> program and program_client

1. program is the backend to the application

2. program_client is a fixed script that does the following
    1) establish the connection
    2) create a buyer, supplier, currency, auction and bid
    3) execute a purchase

The application provides a trade interface for buyers and seller to come onto the platform to trade REC via the marketplace.

Prerequistes:
1. Solana Wallet 
2. Rust to execute program
3. Node and typescript to execute progrma_client

Execution steps:
1. Navigate to program_client and run the command 
```npm install
   npx ts-node app.ts
```