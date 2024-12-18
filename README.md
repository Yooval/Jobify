
## Overview

**Jobify** is a web application designed to help you stay organized and efficient in your job search. It allows you to keep track of all your job positions, their statuses (interview, declined, pending), and types (full-time, part-time, internship). 
The website is built using Node.js(express) and React. The website is connected to a MongoDB database where all the users information is stored.

- the app is available [here](https://jobify-xwcl.onrender.com/). give it a try!
### Client Side:
  
- **Home Page**: Present the app. Here users can register and choose to log in.
- **Login Page**: allow users to log in(with their credentials) and explore the app without logging. than, 5 pages are presented and users can navigate between them:
- **Add Jobs**: Logged users can add new jobs here. provide position company location type status.
- **All Jobs**: Each user can view applications(not logged user can view Admin applications). Logged users can update, delete their own. In adition, all users can Filter jobs by status, type, or keywords (e.g., searching for "goo" will show "Google"). Sort jobs by dates or alphabetically, in ascending or descending order. 
- **Stats**: Get a visual overview of your job search progress, including the number of applications by status and type.
- **Profile**: view/edit your details. 
- **Admin(restricted to the admin)**: view how many users and applications are in the system.
  
Of course, the user can log out any time.

### server Side:
The server side is responsible for two main things
- Saving the users data and present it in the requested pages.
- Manage authentication and authorization for users requests from client side.

### Tech & Tools:
- React Router: used to allow easy navigation between pages and use loaders and actions after form submition.
- React Query: used to simplifies data fetching, caching(data exist in cache for 5 minutes after after it fetched), and synchronization.
- Axios: used to simplifies the process of making HTTP requests from web browsers. in App, axios defines a base URl to every request from the client and than we can add the suffix for routing it in the server side.
- Cloudinary: Cloudinary is a cloud-based media management platform. In app, we upload pictures in the client side and when a user edit it's profile in the server side he can choose one.

- ### Installation:
- the app is available [here](https://jobify-xwcl.onrender.com/). give it a try!
- if you want to run it locally open the project and run in terminal **npm install** and **npm run dev**. you should see the app running on http://localhost:5173/  
  


