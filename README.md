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

## Running the Application Using an IDE

### IntelliJ IDEA or Eclipse or Visual Studio Code

1. **Open the Project**:
   - Launch Ide.
   - Select `File` -> `Open` and navigate to the root directory of your project. Select the project and click `OK`.

2. **Configure the Database**:
   - Ensure that MySQL is running and you have created a database named `customer_db`.
   - Update the database connection details in `src/main/resources/application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Import Maven Dependencies**:
   - IntelliJ should automatically detect the `pom.xml` file and prompt you to import dependencies. If not, click on the `Maven` tool window , and then click the `Reload All Maven Projects` button.

4. **Run the Application**:
   - Locate the main class with the `@SpringBootApplication` annotation ( `src/main/java/com/yourpackage/YourApplication.java`).
   - Right-click on the main class file and select `Run 'YourApplication.main()'`.

5. **Access the Application**:
   - Open web browser and navigate to `http://localhost:8080` to access the application.

### Entity Schema

![Screenshot 2024-08-10 152718](https://github.com/user-attachments/assets/71de69a8-33b7-4b0f-b8d1-ef79026747e7)

