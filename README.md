
# 🚀 Verbio

## 📋 Project Overview

Verbio is a robust, modern web solution built with cutting-edge technologies, offering a comprehensive set of features for secure, scalable, and performant web development.

## ✨ Key Features

### 🔐 Authentication
- Multi-Factor Authentication (MFA)
- Passwordless Authentication
- OAuth Integration
  - Google Sign-In
  - GitHub Sign-In

### 🛡️ Security
- Server-side validation using Zod and Conform
- Secure authentication mechanisms
- Robust access control

### 💾 Database & ORM
- Supabase Postgres Database
- Prisma ORM for efficient data management

### 💳 Payments
- Stripe Integration
  - Secure payment processing
  - Webhook implementation for transaction tracking

### 📤 File Management
- File uploads with Uploadthing
- Unique subdirectory validation

### 🎨 Frontend
- Tailwind CSS for styling
- Shadcn UI components
- Responsive and modern design

### 🚀 Performance
- Next.js App Router
- Server-side rendering
- Optimized performance
- Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Authentication**: Kinde
- **Database**: Supabase Postgres
- **ORM**: Prisma
- **Payments**: Stripe
- **Validation**: Zod, Conform
- **File Upload**: Uploadthing
- **Styling**: Tailwind CSS, Shadcn UI
- **Deployment**: Vercel

## 📦 Prerequisites

- Node.js
- npm or Yarn
- Supabase Account
- Stripe Account
- Kinde Account
- Google/GitHub OAuth Applications

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/al3sha9/verbio.git
cd verbio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file with the following variables:

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Kinde
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=

# OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Uploadthing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

### 4. Database Migration

```bash
npx prisma migrate dev
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

## 🌐 Deployment

Deploy to Vercel with one-click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/featureName`)
3. Commit your changes (`git commit -m 'Add some featureName'`)
4. Push to the branch (`git push origin feature/featureName`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Project Link: [https://github.com/al3sha9/verbio](https://github.com/al3sha9/verbio)

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Stripe](https://stripe.com/)
- [Kinde](https://kinde.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
