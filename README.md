# Jobby App

Jobby App is a secure, dynamic job-finding platform with robust authentication, protected client-side routes, and JWT-based API access. The app empowers users to search for employment opportunities, filter results by criteria like employment type and salary range, deep dive into job details with similar role suggestions, and enjoy seamless navigation with enhanced UI state handling for loading and errors.  

## Features

- **Secure Authentication**  
  - User sign-in and sign-out with JWT (JSON Web Token)  
  - Protected routes to prevent unauthorized access  
- **Job Search & Filtering**  
  - Keyword-based job search  
  - Filters for employment type (e.g., full-time, part-time, freelance)  
  - Filters for salary range  
- **Job Listings & Details**  
  - User-friendly list of jobs with essential meta information  
  - Detailed job view with company info, skills, description, and similar job recommendations  
- **Enhanced User Experience**  
  - Loading indicators and graceful error state handling  
  - Responsive design for mobile and desktop  
  - Easy navigation using React Router  
- **API Access & Security**  
  - All job-related API calls are secured by JWT authentication  
  - Minimal exposure of sensitive data

## Tech Stack

| Language       | % Usage      |
|----------------|-------------|
| JavaScript     | 68.5%       |
| CSS            | 27%         |
| HTML           | 4.5%        |

- **Frameworks & Libraries:**  
  - React
  - React Router
  - JWT-decode (for JWT validation)
  - Axios/fetch for API calls

- **State Management:**  
  - React (useState, useEffect, custom hooks)

## Getting Started

### Prerequisites

- Node.js (>= v14)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RAJAMURUGAN-VS/jobby-app.git
   cd jobby-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup:**  
   Create a `.env` file in the project root and configure the necessary API endpoint and JWT secret as per your backend specs, e.g.:
   ```
   REACT_APP_API_URL=https://your-api-endpoint.com
   ```

4. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build (for production)

```bash
npm run build
# or
yarn build
```

## Folder Structure

```
jobby-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/        # API calls, auth utilities
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env.example
├── package.json
└── README.md
```

## Usage

- **Login:**  
  Enter credentials to receive a JWT and access the jobs dashboard.
- **Browse & Filter Jobs:**  
  Use filters to narrow down your job search by employment type or salary.
- **View Details:**  
  Click any job listing to see a detailed overview and similar positions.
- **Apply:**  
  Use the provided call-to-action to proceed with job applications (integration with actual job applications depends on the backend implementation).

## API Details

- The application expects a backend with routes for:
  - `/login` (JWT auth)
  - `/jobs` (List jobs, supports query params)
  - `/jobs/:id` (Job details)
  - `/jobs/:id/similar` (Similar jobs list)
- All routes (except `/login`) require JWT in `Authorization` header:  
  `Authorization: Bearer <token>`

## Security

- Protected routes using React Router `<PrivateRoute />` pattern  
- JWTs are stored securely (consider httpOnly cookies or secure local storage)
- No sensitive data or secrets are exposed on the frontend

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/yourFeature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/yourFeature`)
5. Create a pull request

## License

[MIT](LICENSE) © 2026 RAJAMURUGAN-VS

## Acknowledgements

- Powered by [React](https://reactjs.org/)
- Icons and design inspirations from [Font Awesome](https://fontawesome.com/) and [Dribbble](https://dribbble.com/)
