# NeuroNexus Platform

Advanced Neuroscience Research Platform - Responsive Web Application

## Overview

NeuroNexus is a comprehensive platform designed for neuroscience researchers, providing state-of-the-art tools for data collection, analysis, and collaboration. The platform includes separate portals for administrators and laboratory staff.

## Features

- **Landing Page**: Modern, responsive landing page with features showcase
- **Authentication System**: Login, registration, and password reset functionality
- **Admin Portal**: Complete dashboard for managing users, labs, experiments, and participants
- **Lab Portal**: Dedicated interface for lab staff to manage experiments, participants, and data
- **Firebase Integration**: Ready-to-integrate Firebase Authentication and Realtime Database
- **Responsive Design**: Built with Bootstrap 5 for seamless mobile and desktop experience

## Color Palette

- **Primary Blue**: #0D6EFD (Headers, navbar, buttons)
- **Background White**: #FFFFFF (Page background, cards)
- **Text Dark Gray**: #333333 (Primary text)
- **Secondary Light Gray**: #F1F3F5 (Borders, dividers)
- **Success**: #28A745
- **Warning**: #FFC107
- **Error**: #DC3545
- **Info**: #0DCAF0

## Project Structure

```
neuronexus-platform/
├── index.html              # Landing page
├── login.html             # Login page
├── register.html          # Registration page
├── forgot-password.html   # Password reset page
├── admin-dashboard.html   # Admin dashboard
├── admin-users.html       # User management
├── lab-dashboard.html     # Lab dashboard
├── css/
│   └── style.css         # Main stylesheet
├── js/
│   ├── main.js           # Main JavaScript
│   ├── auth.js           # Authentication logic
│   ├── firebase-config.js # Firebase configuration
│   └── dashboard.js      # Dashboard functionality
├── package.json          # Project configuration
├── vercel.json          # Vercel deployment config
└── README.md            # This file
```

## Pages Included

### Public Pages
- **Landing Page** (`index.html`): Homepage with features, about, and contact sections
- **Login** (`login.html`): User authentication
- **Register** (`register.html`): New user registration
- **Forgot Password** (`forgot-password.html`): Password recovery

### Admin Portal
- **Admin Dashboard** (`admin-dashboard.html`): Overview with statistics and recent activity
- **User Management** (`admin-users.html`): Manage system users

### Lab Portal
- **Lab Dashboard** (`lab-dashboard.html`): Lab overview with sessions and data

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.0
- **Icons**: Bootstrap Icons 1.11.0
- **Authentication**: Firebase Authentication (ready for integration)
- **Database**: Firebase Realtime Database (ready for integration)

## Firebase Integration

The application is structured to integrate with Firebase. To complete the integration:

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication and Realtime Database
3. Update `js/firebase-config.js` with your Firebase credentials
4. Uncomment the Firebase SDK imports in the JavaScript files

## Backend Integration (PHP)

The UI is designed for easy PHP backend integration:

- All forms use standard HTML form elements
- Form IDs and input names are semantic and ready for processing
- Firebase configuration can be replaced with PHP session management
- Database structure is prepared for PHP/MySQL integration

## Local Development

To run locally:

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Run the development server
npm run dev
```

The application will open at `http://localhost:3000`

## Deployment

This project is configured for deployment on Vercel.

### Automated Deployment

```bash
vercel deploy --prod --yes
```

## Responsive Design

The platform uses Bootstrap 5's grid system and components for responsive design:

- Mobile-first approach
- Breakpoints: xs, sm, md, lg, xl, xxl
- Responsive navigation with mobile menu
- Collapsible sidebar on mobile devices
- Responsive tables and cards

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
