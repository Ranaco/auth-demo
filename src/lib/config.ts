import { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
export const pages = {
  signIn: "/login",
};

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientSecret: process.env.CLIENT_SECRET || "",
      clientId: process.env.CLIENT_ID || "",
    }),
  ],
  pages,
} satisfies NextAuthOptions;
