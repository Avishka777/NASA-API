# NASA API Portal

Hosted URL - https://nasa-api-vx5q.onrender.com/

Welcome to the NASA API Portal! This project aims to make NASA data, including imagery, readily accessible to application developers. The catalog focuses on broadly useful and user-friendly APIs while not encompassing every NASA API available.

# Features

- Sign Up: Users can create an account.
- Sign In: Registered users can sign in to their accounts securely.
- Explore NASA Data: Browse through a curated selection of NASA APIs, including astronomy imagery, Mars rover photos, and more.
- Responsive Design: The portal is designed to be accessible on various devices, including desktops, tablets, and mobile phones.

# Technologies Used

- Frontend: React.js, React Router, Material-UI, Flowbite React
- Backend: Node.js, Express.js, MongoDB, Mongoose
- State Management: Redux Toolkit, React Context API
- Authentication: JWT (JSON Web Tokens), bcrypt.js
- Styling: CSS, Tailwind CSS
- Persistence: Redux Persist
- Deployment: Render

# Getting Started with Project

To get started with the project, follow these steps:

1. Clone the Repository: Clone the project repository to your local machine using the following command:
    - git clone <repository_url> 
2. Install Dependencies: Open a terminal within the project directory and run the following command to install all dependencies:
    - npm install 
3. Create .env file: use "MONGO" for your MongoDB url and use "JWT_SECRET" for secret key:
    - JWT_SECRET = "anything"
    - MONGO = "mongodb+srv://xxx:xxx@xxx-xxx.nfsmyma.mongodb.net/?retryWrites=true&w=majority&appName=xxx-xxx"
4. Run Backend Server: Start the backend server by running the following command in the terminal:
    - npm run dev
5. Run Frontend Server: Open a new terminal and navigate to the frontend directory within the project directory using the following command:
    - cd frontend
6. Create .env file: use "VITE_FIREBASE_API_KEY" for your firebase api key:
    - VITE_FIREBASE_API_KEY  = ""AIzaxxxxxxxxxxxxxxxxxxx"
7. Then, run the following command to start the frontend server:
    - npm run dev
8. Access the Application: Open a web browser and go:
    -  http://localhost:5173/
9. Login: You can log in as an admin, faculty, or student using the provided credentials.
10. With these steps, you should now be able to run the project locally and access it through your web browser.

# API Documentation

You can access the API documentation for our University Timetable Management System through Postman. Please follow these steps to view the documentation:

1. Open Postman and ensure you are logged in.
2. Import the provided collection of APIs.
3. Once imported, you can explore the available endpoints, request methods, and parameters.
4. Each API endpoint is documented with details such as its purpose, expected input parameters, and sample responses.
5. Test the APIs directly within Postman to familiarize yourself with their functionality.

# Contact

For any inquiries or support, please contact avishkarathnakumara@gmail.com