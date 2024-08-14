# Airline Backend System

## Objective
The Airline Backend System is designed to provide a robust and maintainable backend infrastructure for an airline company. The system primarily supports users who wish to search for flights, book flights, and manage their flight-related activities. This project focuses on creating a seamless backend experience to enhance the user's interaction with the airline's services.

## Features

### Core Functionalities
- **Flight Search**: Users can search for flights between specified source and destination locations.
  - Users can specify the date of the journey.
- **Flight Booking**: Users can book flights after searching, with options to:
  - Select flight class (optional).
  - Specify the number of tickets (optional).
- **Flight Listing**: Flights are listed based on best available options, sorted by time and price.
- **Pagination & Filters**: Support for paginated flight listings and filters based on:
  - Price
  - Departure time
  - Duration

### Booking Management
- **Booking a Flight**: Users can book flights after making a dummy payment.
- **Booking Cancellation**: Users can cancel a booking and may initiate a refund based on specific criteria.
- **Excess Luggage Booking**: Users can book excess luggage for their flights.

### DB Design
- **Airplane**
- **Airport**
- **Flight**
- **City**

    - Single Airplane can be used for multiple flights so (1: N relationship)
    - Single City can be have multiple airports so (1: N relationship)
    - Multiple flights can be there from single airport so (N:1 relationship)

    - DB relationship : https://lucid.app/lucidchart/40d3f31d-2419-4bf6-8af4-71ec50f7d3bf/edit?beaconFlowId=F3121000318B36D2&invitationId=inv_53a53503-435e-41b2-81cc-1ee173813b48&page=0_0#


### User Account & Notifications
- **User Authentication**: Users can authenticate using email and password.
- **Price & Delay Tracking**: The system tracks flight prices and notifies users of price drops or delays.
- **Flight History**: Users can view their previous and upcoming flight bookings.
- **Boarding Pass**: Users can download their boarding pass after completing an online check-in.
- **Online Check-In**: Support for online check-in with notifications sent 3 hours before departure.
- **Flight Reviews**: Users can review flights post-travel, with a star rating and comment system.
  - Reviews are displayed alongside flight listings.
- **Notifications**: Users receive email notifications for various events such as flight delays and online check-in reminders.
- **Discount Coupons**: Users can apply coupons for discounts during the booking process.
- **Multiple Seat Reservation**: Users can reserve more than one seat under a single login.

## Non-Functional Requirements
- **Scalability**: The system is designed to handle increased traffic, with accurate booking and real-time price updates.
- **Concurrency**: Managed through an RDBMS to ensure consistent and reliable booking processes.

## Getting Started
To set up and run this project, clone the repository and follow the installation instructions in the each folder README.md file.

---

This README provides an overview of the Airline Backend System, outlining its key features and requirements.
