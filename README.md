# Stock Sales Management Frontend

A beautiful Next.js frontend application for the Stock Sales Management system with authentication and modern UI design.

## Features

- 🔐 **Authentication System**: Sign up and sign in with JWT token authentication
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🛡️ **Protected Routes**: Secure dashboard access with authentication
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🎯 **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend server running on `http://localhost:7002`

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Authentication Flow

1. **Sign Up**: Create a new account with username, email, password, and role
2. **Sign In**: Login with your email and password
3. **Dashboard**: Access the protected dashboard with "Hello World" message

### Available Roles

- **User** - Basic user access
- **Vendor** - Vendor-specific features
- **Manager** - Management capabilities
- **Admin** - Administrative access
- **Super Admin** - Full system access

## Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout with AuthProvider
│   │   └── page.tsx        # Main page with auth logic
│   ├── components/         # React components
│   │   ├── auth/          # Authentication components
│   │   │   ├── AuthPage.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── dashboard/     # Dashboard components
│   │   │   └── Dashboard.tsx
│   │   └── ProtectedRoute.tsx
│   ├── contexts/          # React contexts
│   │   └── AuthContext.tsx
│   └── lib/              # Utility functions
│       └── api.ts        # API configuration
├── public/               # Static assets
└── package.json
```

## API Integration

The frontend connects to the backend API at `http://localhost:7002/api`:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

## Styling

The application uses Tailwind CSS with custom gradients and modern design patterns:

- **Color Scheme**: Blue to purple gradients
- **Typography**: Clean, readable fonts
- **Components**: Card-based layout with shadows and borders
- **Animations**: Smooth transitions and loading states

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables are required for basic functionality. The API base URL is hardcoded to `http://localhost:7002/api`.

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

Or deploy to platforms like Vercel, Netlify, or any Node.js hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Stock Sales Management system.