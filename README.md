# HimCabs Backend (NestJS)

## Implementation Plan

This plan outlines the implementation of the HimCabs backend using NestJS, matching the requirements extracted from the PDF documentation.

### 1. Project Configuration & Dependencies
-   **Database**: Set up PostgreSQL connection (using TypeORM).
-   **Config**: Set up `@nestjs/config` for environment variables.
-   **Redis**: Set up Redis for caching and real-time features.

#### `docker-compose.yml`
-   Define services for PostgreSQL and Redis for local development.

#### `src/app.module.ts`
-   Import `ConfigModule`, `TypeOrmModule`, and feature modules.

### 2. Core Modules
We will create four main feature modules corresponding to the architecture.

#### `src/users/` (Rider Operations)
-   **Entities**: `User`
-   **Controller/Service**: Auth (OTP), Profile management, SOS.

#### `src/drivers/` (Driver Operations)
-   **Entities**: `Driver`, `Vehicle`
-   **Controller/Service**: Registration, KYC upload, Availability toggle, Earnings.

#### `src/rides/` (Ride Matching & Core Logic)
-   **Entities**: `Ride`
-   **Controller/Service**: Create ride, Match driver (using Redis/Geo), Ride status updates, Pricing logic.
-   **Gateway**: `RidesGateway` (WebSocket) for real-time tracking and status updates.

#### `src/admin/` (Admin Panel)
-   **Controller/Service**: Driver approval, Fare management, Analytics.

### 3. Shared/Common
-   **Guards**: Auth guards (JWT).
-   **Interceptors**: Response formatting.

## Verification
-   **Automated Tests**: `npm run test` (Unit), `npm run test:e2e` (E2E).
-   **Manual Verification**: Use Swagger/Postman to test flows (Register, Drive, Ride).
