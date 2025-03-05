# URL Shortener API

A simple URL shortener service built with **Node.js (Express)** and **MongoDB**. It provides URL shortening, redirection, and analytics. The API also includes **user authentication (JWT-based)** and supports **rate limiting** and **expiry of short URLs**.

## Live Demo

🔗 [Try the API here](https://url-shortener-thzn.onrender.com/)

## Features

- **Shorten URLs** → `POST /shorten` (Takes a long URL & returns a short code)
- **Redirect to original URL** → `GET /:shortCode` (Redirects to the original URL)
- **View URL stats** → `GET /stats/:shortCode` (Returns the number of times the URL was accessed)
- **Authentication** → `POST /auth/register` and `POST /auth/login`
- **Rate Limiting** → Users can shorten up to **5 URLs per hour**
- **Expiry Feature** → Shortened URLs expire after **7 days**

## Tech Stack

- **Backend:** Node.js (Express)
- **Database:** MongoDB
- **Authentication:** JWT-based

## Postman Screenshots  

## API Endpoints






#### Register a new user  
`POST /auth/register`
![Screenshot (555)](https://github.com/user-attachments/assets/d8d101e2-3077-4aa1-97a1-cce48495284f)
#### Login existing user  
`POST /auth/login`
![Screenshot (556)](https://github.com/user-attachments/assets/27218aa8-d890-441b-9085-87cd7ccf4188)

#### Shorten URLs  
`POST /shorten`
#### Redirect to original URL  
`GET /:shortCode`
#### Rate Limiting

![Screenshot (554)](https://github.com/user-attachments/assets/38336317-617d-4c22-a3d4-8b711c3fa350)

#### View URL stats  
`GET /stats/:shortCode`
