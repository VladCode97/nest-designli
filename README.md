# Prerequisites

You will need the following tools installed on your system:
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/))
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

## Installing

Follow these steps to get your development environment running:

1. Clone the repository:
   ```bash
   https://github.com/VladCode97/nest-designli.git

2. Install dependencies:
   ```bash
   npm install

2. Run project (Local):
   ```bash
   npm run start:dev

# Email with Attachments

This NestJS project is designed to parse emails from provided file paths, extract JSON data from attachments or linked content, and return this data through a REST API.

## Overview

The Email JSON Extractor Service provides an endpoint that receives a file path to an email file, parses the email, and extracts JSON either directly from the email's attachments or from links found in the email content. The extracted JSON is then returned as a response.

## Features

- Parse emails to find and extract JSON data.
- Handle both direct JSON attachments and JSON links within email content.
- Robust error handling for file reading and network requests.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Class diagram
![alt text](https://res.cloudinary.com/dowlrsxjg/image/upload/v1720302097/jsonExtractor_cz3j3z.png)


# JSON Transformer Service

This NestJS project is designed to transform JSON data from a SES notification into a custom JSON format that provides insights into the security status of emails.

## Overview

The service takes JSON data representing SES notifications, maps this data to a structured class, and then transforms it to a new JSON structure indicating the status of various security checks.

## Features

- Transform SES notification JSON into a custom security status report.
- Utilize class transformation to ensure data integrity and structure.
- Provide endpoints for receiving JSON data and returning the transformed data.


### Class diagram
![alt text](https://res.cloudinary.com/dowlrsxjg/image/upload/v1720302890/json-transformer_gjhzwr.png)