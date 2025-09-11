


# API Gateway

An **API Gateway** built with **Node.js** and **Express.js** for managing and routing requests to microservices with authentication, logging, rate limiting, and proxy configuration.

---


###### Overview

- An API Gateway is like the front desk of a company: it’s the single point where all client requests come in, and it directs them to the correct backend service. Instead of clients communicating with each service individually, they only talk to the API Gateway.

- This project includes an API Gateway built with Node.js and Express.js to manage requests efficiently and securely.

###### Key Responsibilities

- Routing Requests: Sends client requests to the right backend service.

- Authentication & Authorization: Ensures only valid users can access APIs.

- Rate Limiting: Protects services from overload by controlling request frequency.

- Logging & Monitoring: Tracks API usage and errors for easier debugging.

- Response Aggregation: Combines results from multiple services into one response.

#### Why Use an API Gateway?

- Clients need to call only one endpoint, simplifying frontend code.

- Centralized security and monitoring make management easier.

- Makes scaling microservices simpler and more efficient.

#### How It Works (Simplified Flow)

- Client → sends request to API Gateway.

- API Gateway → checks authentication, rate limits, and decides which service to call.

- Backend Service → processes request.

- API Gateway → aggregates response if needed.

- Client → receives final response.
```bash
Client → API Gateway → Service 1 → API Gateway → Client
                       → Service 2 → API Gateway → Client
                       → Service 3 → API Gateway → Client

```
## Features

- **Request Routing:** Central gateway to forward requests to microservices.
- **Authentication:** Keycloak-based authentication via `setupAuth` middleware.
- **Rate Limiting:** Protect APIs from excessive requests using `express-rate-limit`.
- **Credit Check:** Middleware to validate user/service credits.
- **Security Checks:** Basic security validations using `securityCheck`.
- **Logging:** Structured logging using `winston`.
- **Proxy Support:** Route requests to external/internal services via `http-proxy-middleware`.

---

## Flow Diagram

![API Gateway Flow Diagram](/public/images/api_gateway_image.png)

## Project Structure
```bash
.
├── api
│   ├── controller
│   │   └── login.controller.js
│   └── routes
│       └── login.routes.js
├── entry.js
├── package-lock.json
├── package.json
├── readme.md
└── src
    ├── logging
    │   └── logger.js
    ├── middleware
    │   ├── apiRateLimit.js
    │   ├── checkCredit.js
    │   └── setupAuth.js
    ├── proxy
    │   ├── configureProxy.js
    │   └── ConfigureProxy.js
    ├── routes
    │   └── routes.js
    └── security
        └── securityCheck.js

```


---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/gauravkesh/api_gateway.git
cd api_gateway
```

Install dependencies:

```bash

npm install
```

- Configure environment variables using .env or .env.* (via dotenv-flow).
- check env.example as a template


``` 
 .env
 ```

## Usage
#### - Development
```bash
npm run dev
```
#### - Production
```bash
npm run start
```


## Dependencies
- express – Web framework for routing and middleware.

- dotenv-flow – Environment variable management.

- express-session – Session handling for Keycloak.

- jsonwebtoken -  to handle authentication token and verification

- express-rate-limit – API rate limiting.

- http-proxy-middleware – Proxy requests to services.

- winston – Logging.

- morgan – HTTP request logging.

## Middleware Overview
  ### - Middleware	Purpose
- setupAuth	Integrates Keycloak authentication.
- apiRateLimit	Limits request rates to prevent abuse.
- checkCredit	Validates service credits for requests.
s- ecurityCheck	Performs basic security checks on requests.

## Proxy Configuration
- Proxies are configured via src/proxy/configureProxy.js.
-  Use it to route requests to internal or external microservices seamlessly.

# Author
Gaurav Kesh Roushan


