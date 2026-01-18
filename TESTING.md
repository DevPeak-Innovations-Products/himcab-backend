# API Testing Guide

This document contains CURL commands to test the implemented API endpoints.

## Prerequisites
1.  Ensure Docker containers are running:
    ```bash
    docker-compose up -d
    ```
2.  Start the application:
    ```bash
    npm run start:dev
    ```

## Auth Endpoints

### 1. Send OTP
Request OTP for a phone number.

```bash
curl -X POST http://localhost:3000/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210"}'
```
**Expected Response:**
```json
{
  "message": "OTP sent successfully",
  "mockOtp": "1234"
}
```

### 2. Verify OTP & Login
Verify the OTP (use "1234" as the mock OTP) to get a JWT token.

```bash
curl -X POST http://localhost:3000/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+919876543210", "otp": "1234"}'
```
**Expected Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "id": "uuid-string",
    "phone": "+919876543210",
    "isActive": true,
    ...
  }
}
```

## User Endpoints (To be implemented protected routes)
*Currently, you can verify user creation by checking the response of the Verify OTP step.*
