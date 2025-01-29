
 # Project Title
 Public API to Retrieve Basic Information

## Description
A public API that returns the following information in JSON format:
Your registered email address (used to register on the HNG12 Slack workspace).
The current datetime as an ISO 8601 formatted timestamp.
The GitHub URL of the project's codebase.


## Usage/setup instructions

Instructions on how to use the project.
You can run the project on your local machine with the following steps:

1 Create a new folder in your terminal with this command
# mkdir myFolder

2 Navigate to the new folder create with this command

## cd myFolder

3 Clone the repo by entering this command in your current directory

# git clone https://github.com/benjamin2orie/Stage0-task


4 Enter this command to open the Vs code

## code .

5 Enetr this command to open terminal in the Vs code 
## CONTROL+SHIFT+

6 Run this command to install all the dependencies

# npm install

7 Run this command to start the server
## npm run dev




## API Documentation

## Endpoint URL:
[endpoint-url] (http://localhost:6050/api/v1/info)

# Method:
GET

# Description: 
Retrieves basic information including email, current datetime, and GitHub URL.

## Request Format:
No request body is required for this endpoint. Simply send a GET request to the endpoint URL


# Response Format:
The response will be in JSON format and includes the following fields:

# status:
200: Ok

## status:
500: Server error

{
  "email": "ogechukwu@gmail.com",
  "current_datetime": "2025-01-29T10:32:22.028Z",
  "github_url": "https://github.com/benjamin2orie/Stage0-task"
}



## Example Usage

 [GET] (http://localhost:3000/api/info)



 ## Backlink

 Looking to hire Skilled developers? Checkout here!

 [JavaScript](https://hng.tech/hire/nodejs-developers)





