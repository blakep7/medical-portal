# All-in-One Medical Portal Platform 🌐💉

## COMPE561 - Windows Database and Web Programming Project

Welcome to our Medical Portal Platform, a comprehensive solution developed as a part of the COMPE561 (Spring 2024) course. This project aims to provide a user-friendly platform for managing medical information and services.

## Project Description 🏥

The **All-in-One Medical Portal Platform** is designed to streamline the healthcare experience for both patients and practitioners. Here's what it brings to the table:

- **User-Friendly Interface:** A platform where patients can easily schedule appointments, request prescription refills, access medical records, and make online payments for treatments.

- **Customizable for Different Practices:** Website administrators can tailor the site for specific types of practices (dental, family, veterinary) by enabling or disabling features.

- **Access Groups:** Ensures a secure environment with access groups for healthcare providers, front desk staff, and patients.

- **Comprehensive Database:** Tracks prescriptions, medical records, payments, charts, and vaccines, providing a centralized hub for healthcare information.

- **Appointment Scheduler:** Simplifies appointment management for both patients and healthcare providers.

- **Audit Logging:** Logs when patient information is accessed, by whom, and for what reason, ensuring accountability.

- **Reminder System:** Includes a reminder system for important tasks like scheduling the next dental cleaning or getting a vaccine booster.

- **Payment Feature:** Secure online payment functionality for convenient treatment transactions.



- ## Getting Started 🚀

To create the docker contain run, run it and bind to localhost.
```console
docker build -t medportal:dev ./Medportal
docker run -p 8000:8000 medportal:dev
```
Now you should be able to navigate to `http://localhost:8000` and view the website.

Alternatively, you can pull the docker image and run it.
```console
docker pull blakep7/medportal:latest
docker run -p 8000:8000 blakep7/medportal:latest
```

## Contributors 👩‍💻👨‍💻

- Blake Pearson
- Steven Kourani
- Anish Singaram
- Jared Acosta

## License 📜

This project is licensed under the [Apache License 2.0](LICENSE).

