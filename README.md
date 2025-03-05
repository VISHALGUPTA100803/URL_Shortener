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
![Screenshot (555)](https://github.com/user-attachments/assets/d8d101e2-3077-4aa1-97a1-cce48495284f)
#### Login existing user  
**Endpoint:** `POST /auth/login`
![Screenshot (556)](https://github.com/user-attachments/assets/27218aa8-d890-441b-9085-87cd7ccf4188)

#### Shorten URLs  
**Endpoint:** `POST /shorten`
![Screenshot (557)](https://github.com/user-attachments/assets/c9f5f538-fec3-484b-803f-b7e80f280b70) ![Screenshot (558)](https://github.com/user-attachments/assets/dc05315a-b6b2-4352-b693-02d912fb37e3)
#### Redirect to Original URL  
**Endpoint:** `GET /:shortCode`  
**Example:** [http://url-shortener-thzn.onrender.com/EFEFlGoWT](http://url-shortener-thzn.onrender.com/EFEFlGoWT)  
This endpoint redirects the user to the original long URL associated with the provided short code. 

#### View URL stats  
**Endpoint:** `GET /stats/:shortCode`
![Screenshot (559)](https://github.com/user-attachments/assets/31ec2ae6-27c2-405e-9fb0-91f3f16704de)

#### Rate Limiting

![Screenshot (554)](https://github.com/user-attachments/assets/38336317-617d-4c22-a3d4-8b711c3fa350)



