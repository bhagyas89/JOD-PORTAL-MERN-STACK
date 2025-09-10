MERN Stack Job Portal

Welcome to the Job Portal project! This is a full-stack job portal application built using the MERN stack (MongoDB, Express, React, Node.js).

Table of Contents

Project Overview

Features

Installation

Running the Project

Contributing

License

Project Overview

This Job Portal application allows users to search and apply for jobs, and allows employers to post and manage job openings. The application uses the MERN stack, providing a robust environment for full-stack development.

Features

User authentication and authorization

Job listing and search functionality

Job application process

Employer dashboard for managing job postings

Responsive design for mobile and desktop

Installation

Clone the repository:

git clone <your-repo-url>

Install Dependencies

From the root folder:

cd JOB-PORTAL/JOB-PORTAL
npm install


This will install concurrently in the root folder.

Then, install dependencies for both frontend and backend:

cd Frontend
npm install
cd ../Backend
npm install
cd ..

Running the Project

Now you can start both frontend and backend together from the root folder:

cd JOB-PORTAL/JOB-PORTAL
npm start


Frontend (Vite) → green terminal, default: http://localhost:5173

Backend (Express) → blue terminal, default: http://localhost:5000 (or your configured port)

Running Individually (Optional)

Frontend only:

cd Frontend
npm run dev


Backend only:

cd Backend
npm run dev

Usage

Once both servers are running, open your browser and go to:

Frontend: http://localhost:5173

Backend API: http://localhost:5000

You can now browse jobs, apply, and manage job postings.