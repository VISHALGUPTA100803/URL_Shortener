# URL Shortener API

A simple URL shortener service built with **Node.js (Express)** and **MongoDB**. It provides URL shortening, redirection, and analytics. The API also includes **user authentication (JWT-based)** and supports **rate limiting** and **expiry of short URLs**.

## Live Demo

🔗 [Try the API here](https://url-shortener-thzn.onrender.com)

## Features

- **Shorten URLs** → `POST /shorten` (Takes a long URL & returns a short code)
- **Redirect to original URL** → `GET /:shortCode` (Redirects to the original URL)
- **View URL stats** → `GET /stats/:shortCode` (Returns the number of times the URL was accessed)
- **Authentication** → `POST /auth/register` and `POST /auth/login`
- **Rate Limiting** → Users can shorten up to **5 URLs per hour**
- **Expiry Feature** → Shortened URLs expire after **7 days**


## Postman Screenshots  

## API Endpoints









#### Register a new user  

**Endpoint:** `POST /auth/register`

This endpoint allows users to create a new account by providing an email and password. Upon successful registration, a **JWT token** is generated for authentication.  

**Response:** Returns a JWT token that can be used for authenticated requests.

![Screenshot (555)](https://github.com/user-attachments/assets/d8d101e2-3077-4aa1-97a1-cce48495284f)

#### Login existing user  

**Endpoint:** `POST /auth/login`

This endpoint allows existing users to log in by providing their registered email and password. If the credentials are valid, a **JWT token** is issued for authentication.  

**Authorization:** No token required  
**Response:** Returns a JWT token upon successful authentication. 

![Screenshot (556)](https://github.com/user-attachments/assets/27218aa8-d890-441b-9085-87cd7ccf4188)

#### Shorten URLs  

**Endpoint:** `POST /shorten`

This endpoint allows authenticated users to shorten a long URL into a unique short code. The request must include a valid JWT token in the **Authorization** header for authentication. The generated short URL will automatically expire after **7 days**.  

**Authorization:** Bearer Token (JWT)  
**Rate Limiting:** A user can shorten up to **5 URLs per hour** based on their IP address.

![Screenshot (557)](https://github.com/user-attachments/assets/c9f5f538-fec3-484b-803f-b7e80f280b70) ![Screenshot (558)](https://github.com/user-attachments/assets/dc05315a-b6b2-4352-b693-02d912fb37e3)

#### Redirect to Original URL  

**Endpoint:** `GET /:shortCode`  

**Example:** [http://url-shortener-thzn.onrender.com/EFEFlGoWT](http://url-shortener-thzn.onrender.com/EFEFlGoWT)  

This endpoint redirects the user to the original long URL associated with the provided short code. 

#### Rate Limiting

This API implements **rate limiting** to prevent excessive requests from users.  

- **Shortening URLs:** A user can create up to **5 short URLs per hour** based on their IP address.  

If the rate limit is exceeded, the server will respond with an error:  
```json
{
  "error": "You have exceeded the 5 URL shortens per hour limit"
}
```

![Screenshot (554)](https://github.com/user-attachments/assets/38336317-617d-4c22-a3d4-8b711c3fa350)

#### View URL stats  

**Endpoint:** `GET /stats/:shortCode`

This endpoint retrieves analytics for a shortened URL, including the original URL, total clicks, creation time, and expiration date.

```json
{
  "originalUrl": "https://example.com",
  "shortCode": "abc123",
  "clicks": 5,
  "createdAt": "2025-03-05T12:00:00.000Z",
  "expiresAt": "2025-03-12T12:00:00.000Z"
}

```

![Screenshot (559)](https://github.com/user-attachments/assets/31ec2ae6-27c2-405e-9fb0-91f3f16704de)



## Installation  

### 1. Clone the Repository  
```sh
git clone https://github.com/VISHALGUPTA100803/URL_Shortener.git
```
### 2. Install Dependencies
```sh
npm install
```
### 3. Configure Environment Variables
Create a .env file in the project root and add the following variables:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```
### 4. Run the Application
For Development (with Nodemon)
```sh
npm run dev
```




