# Marketplace_Prototype
Welcome to REgen - an ecosystem of a multi-fuel trading market and services relevant to the New Fuel Economy (Hydrogen, Ammonia & Methanol). 

## Introduction
Our mission is to create an inclusive, liquid and transparent future fuel marketplace ecosystem. This prototype is for the fuel trading (primary commodities marketplace) that will exist within our ecosystem of services. The prototype provides a platform for buyers and sellers to trade fuel via an auction system (think eBay/Amazon). 

## Project Resource Links
For more information on how the REgen trading platform works, please view the following platform demo video: Product: https://drive.google.com/file/d/1xVNlNbz8RPEdvXXxUnRzeOidKtHu8ydW/view?usp=drive_link

For a full pitch deck on our company and solutions, please refer to our deck at: https://drive.google.com/file/d/1-2OHr04c08Q0a_-hJ_5_MNTqenCD5r4G/view?usp=sharing

## Prerequisites
1. Solana Wallet 
2. Rust, Node and Typescript environments setup

## Project Structure
The project has 2 subfolders -> program and program_client

1. program is the backend to the application

2. program_client is a fixed script that does the following
    1) establish the connection
    2) create a buyer, supplier, currency, auction and bid
    3) execute a purchase


## Installation

Open a terminal and navigate to directory where you replicated the code.
This is done using the following commands 
```
# navigate to the project's program directory
$ cd Marketplace_Protype/regen/program

#Build and deploy the smart contract
$ cargo build-sbf
```
This will take a few seconds to complete. Once it completes, open a new terminal and type:
```
$ solana-test-validator
```
This command will start a solana validator to where we will be able to deploy the contract. Keep the terminal open so the validator continues running. Finally, return to the terminal where you built the contract and type the command:
```
$ solana program deploy target/deploy/budget_tracker.so
```
After this executed you will get a program ID. Copy and paste this ID in app.ts where there is TODO comment indicating you to paste the program ID

In a new terminal type <code>solana config get</code> and copy the RPC URL for your solana wallet. Paste the URL where there is a TODO comment indicating you to paste the RPC url. 

Save and close the file. In a new terminal navigate to the client i.e. program_client and do the following
```
$ cd Marketplace_Protype/regen/program_clinent
$ npm install
$ npx ts-node app.ts

```
If successfull the code will execute and you will see an auction created and bid on successfully.
