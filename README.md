# InstaGlow AI

AI-powered Instagram content creation platform.

## Features

- AI-powered content generation
- Instagram OAuth integration
- Email/password authentication
- User dashboard with analytics
- Content scheduling and management

## Setup

### Prerequisites

- Node.js 18+
- MongoDB database
- Instagram Developer Account

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd insta_ai
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:

```env
# Database
MONGODB_URL=your_mongodb_connection_string

# Email Configuration
HOST=your_smtp_host
EMAIL_PORT=587
SECURE=false
USER=your_email
PASS=your_email_password

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# Instagram OAuth Configuration
INSTAGRAM_CLIENT_ID=your_instagram_client_id
INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret
```

### Instagram OAuth Setup

1. Go to [Instagram Basic Display](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
2. Create a new app
3. Add Instagram Basic Display product
4. Configure OAuth Redirect URIs:
   - `http://localhost:3000/api/auth/callback/instagram` (development)
   - `https://yourdomain.com/api/auth/callback/instagram` (production)
5. Get your Client ID and Client Secret
6. Add them to your `.env.local` file

### Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Authentication

The app supports two authentication methods:

1. **Email/Password**: Traditional signup and login
2. **Instagram OAuth**: Sign in with Instagram account

### Instagram Integration

When users sign in with Instagram:

- Their Instagram profile data is automatically imported
- They get instant access to Instagram-connected features
- No email verification required for Instagram users

## API Routes

- `/api/user/sign-up` - Email/password registration
- `/api/auth/[...nextauth]` - NextAuth authentication
- `/api/auth/signout` - User logout

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
