## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Nextjs 14 covered topics in this repo

- Basics
  - Pages
  - Routes
  - Links
  - Fetching Data
  - Environment Variables
  - Static Files
  - Images
  - Styles
  - Head
  - Scripts
  - Meta
  - Head
- Routing fundamentals

  - Defining Routes
  - Pages and Layouts
  - Linking and Navigating:- Using the <Link> Component Using the useRouter hook (Client Components) Using the redirect function (Server Components) Using the native History API
  - Loading UI and Streaming
  - Error Handling:- error and reset props
  - Redirecting:- redirect, permanentRedirect, useRouter, NextResponse.redirect
  - Route Groups:- (folderName)
  - Dynamic Routes:- [folderName]
  - Parallel Routes:- condition based rendering in layout file @analytics and @team
  - Intercepting Routes:- (.), (..)
  - Route Handlers:- NextRequest and NextResponse
  - Middleware:- middleware.ts

- Data Fetching

  - Data Fetching, Caching, and Revalidating;- On the server, with fetch On the server, with third-party libraries On the client, via a Route Handler On the client, with third-party libraries.
  - Server Actions and Mutations:- useFormState, 'use server' for the server actions Patterns.

- Rendering

  - Server Components
  - Client Components: 'use client'
  - Server and Client Composition Patterns

- Caching in Next.js:- Mechanism like

  - Request Memoization - Server - Re-use data in a React Component tree
  - Data Cache - Server - Store data across user requests and deployments
  - Full Route Cache - Server - Reduce rendering cost and improve performance
  - Router Cache - Client - Reduce server requests on navigation

- Styling

  - CSS Modules and Global Styles
  - Tailwind CSS
  - Sass

- Optimisation's

  - Image Optimization:- use <Image/> from next js
  - Video Optimization:- Using <video> and <iframe>
  - Font Optimization
  - Metadata:- Export a static metadata object or a dynamic generateMetadata function in a layout.js or page.js file.
  - many more optimisation techniques like lazy loading, code splitting, etc.

- Authentication in nextjs with next-auth
  - Login and Signup
  - Authentication with Third-Party Providers like GitHub.
  - Authentication with email and password
  - Protected Routes and pages
  - Admin can add blogs and add users
  - Other user can see the list of blog and individual blog
  - Logout

## Deployed app with vercel

- https://nextjs14-demo-mauve.vercel.app/
