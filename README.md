# SB Assessment

[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=flat-square)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-E95950?logo=zod&logoColor=white&style=flat-square)](https://zod.sourceforge.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?logo=material-ui&logoColor=white&style=flat-square)](https://mui.com/)   

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
