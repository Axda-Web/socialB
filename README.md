# SB Assessment

![Next.js](https://img.shields.io/badge/Next.js-13.4.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-blue)
![Zod](https://img.shields.io/badge/Zod-3.21.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.2-blue)
![Material UI](https://img.shields.io/badge/Material%20UI-5.13.5-blue)

![screenshot](/screenshot.jpg)

## Description

SB Assessment is a project aimed at building a blog using the React ecosystem. This project explores various concepts and features including:

- Static Site Generation (SSG)
- Server Side Rendering
- Server Components
- Pre-rendering
- Lazy Loading
- Optimistic UI
- Infinite Loading
- Routing
- Form Validation
- Responsive Design
- REST API Integration
- Pagination

and more.

## Technologies Used

- [Next.js](https://nextjs.org) - Version 13.4.4
- [TypeScript](https://www.typescriptlang.org) - Version 5.1.3
- [Zod](https://github.com/colinhacks/zod) - Version 3.21.4
- [Tailwind CSS](https://tailwindcss.com) - Version 3.3.2
- [Material UI](https://mui.com) (Pagination component) - Version 5.13.5

## Getting Started

To get started with the SB Assessment project, follow the steps below:

1. Clone the repository:

   ```shell
   git clone git@github.com:Axda-Web/socialB.git
   ```

2. Change into the project directory:

   ```shell
   cd socialB
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Set up API key config:

- Create an `.env.local` file at the root of the project.
- Add a variable named `NEXT_PUBLIC_API_TOKEN` to the `.env.local` file.
- Set the value of `NEXT_PUBLIC_API_TOKEN` to your API token.

  Example:

  ```shell
  NEXT_PUBLIC_API_TOKEN={your-api-token-here}
  ```

  Make sure to replace `{your-api-token-here}` with your actual API token.

5. Run the project in production mode:

   ```shell
   npm run build
   npm run start
   ```

6. Run the project in development mode:

   ```shell
   npm run dev
   ```

A deployed version of the SB Assessment project is available on Vercel at [social-b](https://social-b.vercel.app/).
