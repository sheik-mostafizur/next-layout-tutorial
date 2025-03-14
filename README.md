# Hiding Root Layout in Next.js Subpages: A Step-by-Step Guide

## Step 1

- Setup nextjs project

![Install nextjs project](./images/1-2025-03-14_12-19.png)

## Step 2

- Create Some layout and pages

![Install nextjs project](./images/2-2025-03-14_12-32.png)

### File and Folder Structures

```
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.tsx
├── (post)
│   ├── (create)
│   │   └── post
│   │       └── create
│   │           └── page.tsx
│   └── post
│       ├── layout.tsx
│       └── page.tsx
└── (root)
    ├── about
    │   └── page.tsx
    ├── home
    │   └── page.tsx
    └── layout.tsx

```

## Step 3

- Visit `http://localhost:3000/post` with layout

![Install nextjs project](./images/3-2025-03-14_12-32.png)

## Step 4

- Visit `http://localhost:3000/post/create` without layout

![Install nextjs project](./images/4-025-03-14_12-32.png)

# Follow me

- [Linkedin](https://www.linkedin.com/in/sheik-mostafizur/)
- [Twitter](https://x.com/sheikmostafizur)
- [GitHub](https://github.com/sheik-mostafizur)
