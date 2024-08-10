# Customer Management CRUD Application

## Overview

This project is a Customer Management CRUD application built using Spring Boot, MySQL, HTML, CSS, and JavaScript. The application provides functionalities for creating, reading, updating, and deleting customers. Additionally, the application includes JWT authentication for secure API access.

## Features

### Backend
- **Create Customer**: API to create a new customer.
- **Update Customer**: API to update an existing customer.
- **Get Customer List**: API to retrieve a paginated, sorted, and searchable list of customers.
- **Get Customer by ID**: API to retrieve a customer by their ID.
- **Pagination**: Allows you to fetch a specific number of customers per page.
- **Sorting**: Supports sorting by any customer attribute (e.g., `first_name`, `last_name`, `email`).
- **Delete Customer**: API to delete a customer by their ID.
- **JWT Authentication**: Secure the APIs using JSON Web Tokens (JWT).

### Frontend
- **Login Screen**: Simple login screen to authenticate users.
- **Customer List Screen**: Displays a table of customers with options to view, update, or delete.
- **Add Customer Screen**: Form to add new customers.
- **Pagination Controls**: Allows navigation through pages of customer data.
- **Sorting Options**: Allows sorting by customer attributes.
- **Sync Button**: Fetches customer data from a remote API and updates or inserts customers in the local database.

## Technologies Used

- **Backend**: Spring Boot, Spring Data JPA, Spring Security, MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JWT (JSON Web Token)
- **Database**: MySQL

## Getting Started

### Prerequisites

- **Java**
- **Maven**
- **MySQL Database**

### Installation and Setup
