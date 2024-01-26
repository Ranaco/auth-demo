import NextAuth from "next-auth/next";
// import { getServerSession } from "next-auth";
// import type {
//   GetServerSidePropsContext,
//   NextApiRequest,
//   NextApiResponse,
// } from "next";
import { authOptions } from "@/lib/config";

const handler = NextAuth(authOptions);

// export function auth(
//   ...args:
//     | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
//     | [NextApiRequest, NextApiResponse]
//     | []
// ) {
//   return getServerSession(...args, authOptions);
// }

export { handler as GET, handler as POST };

// export default NextAuth(authOptions);
