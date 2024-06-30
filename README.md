# Clerk Trial Project

This project is a organizational management tool built with Next.js and Clerk for user authentication.   
It demonstrates the use of Clerk's authentication features, public metadata, dynamic routing, and protected routes.

## Table of Contents
- [Clerk Trial Project](#clerk-trial-project)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [How Does It Work?](#how-does-it-work)
    - [What Does It Do?](#what-does-it-do)
    - [Clerk Features / APIs Used](#clerk-features--apis-used)
  - [Features](#features)
  - [Installation](#installation)
  - [Approach](#approach)
  - [Future Enhancements](#future-enhancements)

## Overview

### How Does It Work?
This application allows users to view a list of organizations, create new organizations, and access detailed profiles for each organization using dynamic routing. It uses Clerk for authentication to ensure secure access to the features.

### What Does It Do?
- **Onboarding**: When a user signs up, they are asked to submit their City, State and Birthday using Clerk's Public Metadata.
- **Authentication**: Users can sign up and log in using Clerk's authentication system.
- **View Organizations**: Users can view a list of organizations and navigate to each organization's profile page.
- **Create Organization**: Users can create new organizations by providing relevant details.
- **Organization Profiles**: Each organization has a unique profile page accessible via dynamic routing.

### Clerk Features / APIs Used
- **Authentication**: Clerk's sign-up, sign-in, and user management APIs.
- **User Data Management**: Clerk's APIs to manage and retrieve user information.
- **Protected Routes**: Protect certain pages based on user roles and permissions.

## Features
- Dynamic routing for organization profiles
- User role-based access control
- Simple and intuitive user interface
- Secure authentication with Clerk

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sun2ii/clerk-trial.git
   cd clerk-trial
   ```

## Approach

I approached this project by breaking down the requirements into manageable components and leveraging Clerk’s authentication and user management features. The implementation involved:

1. Setting up the Next.js application and integrating Clerk.
2. Creating dynamic routes for organization profiles.
3. Using Clerk Components such as `<SignUp>`, `<SignIn>`, `<OrganizationProfile>`, `<UserProfile>` and `<Protect>`
4. Setting up Public Metadata from `useUser()` and showcasing City, State, and Birthday to the user when they are logged in.

## Future Enhancements
If I were to extend this application into a more robust instance, I would consider the following enhancements:

1. **Enhanced User Roles and Permissions:** Implement a detailed user role system with varying levels of access and permissions.
2. **Advanced Data Management:** Integrate a comprehensive backend system (e.g., PostgreSQL, MongoDB) for more complex queries and data relationships.
3. **User Interactions and Notifications:** Add features for user interactions (comments, likes) and implement a notification system.
4. **Performance Optimization:** Optimize the application for performance, including server-side rendering (SSR) and static site generation (SSG).
5. **UI/UX Enhancements:** Continuously refine the user interface and user experience with design frameworks like Tailwind CSS or Material-UI.