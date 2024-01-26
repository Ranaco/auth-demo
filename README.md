# Next Auth demo with Next JS' app/ router

Authentication and authorization are handled by [NextAuth](https://next-auth.js.org).

## App structure

- **Root**
  - [README.md](./README.md)
  - [src](./src)
    - [components](./src/components)
    - [app](./src/app)
    - [auth config](./src/app/api/auth/)
    - [middleware](./src/app/middleware)
  - [public](./public)
  - [package.json](./package.json)

## Problems to watch

### - Middleware issue:

- Middleware should be in src (if src exists or root).
- When using next-auth, include only those routes in matcher which are to be protected.

### - [...nextauth] issue:

- We need to create the folder [...nextauth] instead of creating the file [...nextauth].ts, which then will include route.ts(js).
- authOptions is recommended to be declared in a separate file, so that it can be exported without any issues.
- Need to declare a dotenv of NEXTAUTH_SECRET for production or provide a custom value to secret in authOptions.

### - useSearchParams() issue:

- Need to use Suspense to limit the area of useSearchParams() to avoid error.
