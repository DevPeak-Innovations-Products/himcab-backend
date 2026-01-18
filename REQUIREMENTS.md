# HIMCABS Final Product & Technical Documentation

*A local ride-hailing platform designed for Himachal Pradesh*

---

## 1. Product Overview
HimCabs is a hill-friendly ride-hailing application focused on creating employment for local youth while solving last-mile connectivity issues in Himachal Pradesh.
*   **Pilot City:** Dharamshala. Expansion planned across Himachal Pradesh.
*   **Supported Vehicles:** Two-wheelers, auto-rickshaws, and four-wheelers.

## 2. Problem Statement
*   Limited employment opportunities for youth beyond agriculture and tourism.
*   Poor transport connectivity in hilly terrain.
*   High taxi fares and irregular availability.
*   Absence of a local-first mobility solution.

## 3. Solution
*   A multi-vehicle ride-hailing mobile platform optimized for hill roads, local drivers, and seasonal tourism demand.
*   Primary focus on two-wheelers for narrow roads and quick travel.

## 4. Business Model
*   Commission-based revenue model.
*   **Platform Commission:** 10-15% per ride.
*   Minimal surge pricing, only during peak tourism periods.

## 5. Legal & Compliance
*   Company registration as LLP or Private Limited.
*   Aggregator license and commercial vehicle permissions.
*   Valid insurance, driving license, RC, and police verification for drivers.
*   Pilot launch with local RTO and district administration awareness.

## 6. System Architecture
Three main applications: **Rider App**, **Driver App**, and **Admin Panel**, connected via a central backend handling authentication, ride matching, pricing, payments, and notifications.

## 7. Rider App Features
*   Phone login via OTP.
*   Pickup and drop selection using maps.
*   Vehicle selection and fare estimation.
*   Real-time ride tracking.
*   In-app SOS/emergency contact feature.
*   Feedback/Rating system.

## 8. Driver App Features
*   Driver registration and KYC document upload.
*   Online/Offline availability toggle.
*   Ride request notifications.
*   Navigation, earnings dashboard, and ride history.

## 9. Admin Panel Features
*   Driver approval and suspension.
*   Fare and commission management.
*   Live ride monitoring and dispute handling.
*   Analytics and reporting dashboard.

## 10. Technology Stack (Proposed in Doc)
*   **Mobile Apps:** Flutter.
*   **Backend:** FastAPI (Python) with REST APIs.
*   **Database:** PostgreSQL.
*   **Caching & Real-time Matching:** Redis.
*   **Maps:** Google Maps API.
*   **Payments:** Razorpay and cash option.
*   **Notifications:** Firebase Cloud Messaging (FCM).

## 11. Ride Flow
1. User selects pickup, drop, and vehicle.
2. Backend matches nearest available driver.
3. Driver accepts ride.
4. Live tracking during ride.
5. Ride completion, payment, and rating.

## 12. Pricing Logic
*   Base fare + distance/based charge + time/speed charge.
*   Dynamic pricing (surges) limited to peak demand.

## 13. Database Overview
*   Core tables include users, drivers, vehicles, rides, payments, ratings, and support tickets.
*   One-to-many relationships between users/drivers and rides.

## 14. Security & Safety
*   Driver verification and document checks.
*   Live ride tracking and emergency contact options.
*   Masked phone numbers and support escalation.

## 15. Team Structure
*   **MVP Phase:** Founder, Backend Developer, Mobile App Developer.
*   **Expansion Phase:** UI/UX Designer, QA Tester, Operations Executive.

## 16. Development Timeline
*   **Month 1:** Legal setup, planning, wireframes.
*   **Month 2:** App and backend development.
*   **Month 3:** Pilot launch in Dharamshala with limited drivers.

## 17. Expansion Strategy
*   Dharamshala to McLeodganj, Kangra, and other districts.
*   Partnerships with hotels, homestays, and tourist operators.

## 18. Risks & Mitigation
*   Regulatory challenges mitigated via pilot approvals.
*   Driver availability handled through local incentives.
*   Weather and terrain handled through hill-aware routing.

## 19. Final Summary
HimCabs is a scalable, local ride-hailing platform with social and economic impact, focusing on employment generation, affordability, and hill-specific solutions.
