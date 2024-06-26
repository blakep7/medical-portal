# All-in-One Medical Portal Platform 🌐💉

## Database and Web Programming Project

Welcome to our Medical Portal Platform. This project aims to provide a user-friendly platform for managing medical information and services.

## Project Description 🏥

The **All-in-One Medical Portal Platform** is designed to streamline the healthcare experience for both patients and practitioners. Here's what it brings to the table:

- **User-Friendly Interface:** A platform where patients can easily schedule appointments, request prescription refills, access medical records, and make online payments for treatments.

- **Access Groups:** Ensures a secure environment with access groups for healthcare providers, front desk staff, and patients.

- **Comprehensive Database:** Tracks prescriptions, medical records, payments, charts, and vaccines, providing a centralized hub for healthcare information.

- **Appointment Scheduler:** Simplifies appointment management for both patients and healthcare providers.

- **Reminder System:** Includes a reminder system for important tasks like scheduling the next dental cleaning or getting a vaccine booster.

- **Payment Feature:** Secure online payment functionality for convenient treatment transactions.

## Getting Started 🚀

- You MUST create a demo database using postgresql. Requirements are as follows
  - Name: `medportal`
  - Root User: `postgres`
  - Root Password: `password123`
  - Host: `localhost`
  - Port: `5432`

There are a couple of methods to run our demo website.
- (Preferred) Run in Docker container (2 methods)
  - Pull git repository, navigate to Medportal, run `docker-compose build`, run `docker-compose up`, navigate to http://localhost:8000.
  - Pull docker container from dockerhub (blakep7/medportal:latest). Run the container with the specifications listed in the docker compose file in this repository.
- Run on Localhost
  - Pull the git repo, create a python virtual environment, install python requirements found in requirements.txt, navigate to frontend folder, install node dependencies, npm run build, navigate back to the Medportal directory, run `py/python3 manage.py migrate`, run `py/python3 manage.py runserver localhost:8000`, navigate to http://localhost:8000 on internet.

## 🛠️ Our Stack

### Backend
- Django: We utilize Django, a high-level Python web framework, for our backend, designing custom CRUD REST APIs tailored to our application's needs.

### Database
- Postgresql: Our choice for database management due to its robust features, reliability, and scalability, ensuring efficient data storage and retrieval for our application.

### Authentication
- JWT: Implemented JSON Web Tokens (JWT) for user authentication, providing secure and stateless authentication mechanisms.

### Frontend
- React: Our primary frontend framework, chosen for its component-based architecture and efficient rendering, enabling us to create dynamic and interactive user interfaces.
- Bootstrap 5: Utilized for frontend styling, offering a responsive and mobile-first design approach, ensuring consistency and usability across devices.

### State Management
- Redux: Employed for state management, facilitating predictable state management and enabling us to maintain a single source of truth for our application's data.

### Additional Tools
- Djoser: Integrated with Django for user authentication, providing ready-to-use authentication views and endpoints, reducing development time and effort.

## Contributors 👩‍💻👨‍💻

- Blake Pearson
- Steven Kourani
- Anish Singaram
- Jared Acosta

## License 📜

This project is licensed under the [Apache License 2.0](LICENSE).

