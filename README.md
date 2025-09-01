# School Management App

## Overview
The School Management App is a web application built using Next.js and MySQL that allows users to add and display school information. The application consists of two main pages: one for adding school details and another for displaying the list of schools in a responsive card format.

## Features
- **Add School**: A form to input school details including name, address, city, state, contact number, email, and image upload.
- **Show Schools**: A page that fetches and displays a list of schools from the database in a visually appealing card layout.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

## Project Structure
```
school-management-app
├── src
│   ├── pages
│   │   ├── addSchool.jsx
│   │   └── showSchools.jsx
│   ├── components
│   │   ├── SchoolForm.jsx
│   │   └── SchoolCard.jsx
│   ├── lib
│   │   └── db.js
│   ├── styles
│   │   ├── addSchool.module.css
│   │   └── showSchools.module.css
│   └── schoolImages
├── package.json
├── next.config.js
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd school-management-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up the MySQL database and create the `schools` table with the following fields:
   - id (int, AUTO_INCREMENT)
   - name (text)
   - address (text)
   - city (text)
   - state (text)
   - contact (number)
   - image (text)
   - email_id (text)
5. Configure the database connection in `src/lib/db.js`.
6. Run the application:
   ```
   npm run dev
   ```
7. Open your browser and navigate to `http://localhost:3000`.

## Usage
- To add a new school, navigate to the "Add School" page and fill out the form.
- To view the list of schools, navigate to the "Show Schools" page.

## Technologies Used
- Next.js
- MySQL
- React Hook Form
- CSS Modules

## License
This project is licensed under the MIT License.