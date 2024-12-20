## Overview

**Jobify** is a web application designed to help you stay organized and efficient in your job search. It lets you keep track of all your job positions, their statuses (interview, declined, pending), and types (full-time, part-time, internship). 
The website is built using Node.js (Express) and React, and it connects to a MongoDB database where all user information is stored.

- ### The app is available [here](https://jobify-xwcl.onrender.com/). Give it a try!
- ### View demonstration [here]()

### Client Side:

- **Home Page**: Introduces the app. Here, users can register and choose to log in.
- **Login Page**: Allows users to log in with their credentials or explore the app without logging in. Once logged in, 4-5 pages are available for navigation:
  - **Add Jobs**: Logged-in users can add new jobs by providing position, company, location, type, and status.
  - **All Jobs**: Each user can view their applications (non-logged-in users can view admin applications). Logged-in users can update or delete their own applications. Additionally, all users can filter jobs by status, type, or keywords (e.g., searching for "goo" will show "Google"). Jobs can be sorted by dates or alphabetically, in ascending or descending order.
  - **Stats**: Get a visual overview of your job search progress, including the number of applications by status and type.
  - **Profile(Non-logged users have default one)**: View and edit your details.
  - **Admin (restricted to the admin)**: View the total number of users and applications in the system.

Users can log out at any time and choose between dark and bright displayment.

### Server Side:
The server side handles two main responsibilities:
- Saving user data and presenting it on the requested pages.
- Managing authentication and authorization for user requests from the client side.

### Tech & Tools:
- **React Router**: Used to enable easy navigation between pages and handle loaders and actions after form submissions.
- **React Query**: Simplifies data fetching, caching (data stays in the cache for 5 minutes after being fetched), and synchronization.
- **Axios**: Simplifies the process of making HTTP requests from web browsers. In the app, Axios defines a base URL for every client request, allowing suffixes to route requests on the server side.
- **Cloudinary**: A cloud-based media management platform. In the app, users upload pictures on the client side, and when editing profiles on the server side, they can choose one.

### Installation:
- The app is available [here](https://jobify-xwcl.onrender.com/). Give it a try!
- To run it locally, open the project and run the following commands in your terminal: **npm install** and **npm run dev**. You should see the app running on http://localhost:5100/

