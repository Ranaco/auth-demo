import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { NextAuthOptions, getServerSession } from "next-auth";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { pages } from "@/lib/config";

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      clientSecret: process.env.CLIENT_SECRET || "",
      clientId: process.env.CLIENT_ID || "",
    }),
  ],
  pages,
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions);

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export { handler as GET, handler as POST };

// export default NextAuth(authOptions);
