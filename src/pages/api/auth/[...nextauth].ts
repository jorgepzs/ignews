import { MongoClient } from "mongodb";
import { query as q } from "faunadb";

import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",

  // callbacks: {
  //   async signIn({ email }) {
  //     try {
  //       const isAllowedToSignIn = true;
  //       if (isAllowedToSignIn) {
  //         await fauna.query(
  //           q.Create(q.Collection("users"), { data: { email } })
  //         );
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } catch (error) {
  //       return console.log(error);
  //     }
  //   },
  // },
};
export default NextAuth(authOptions);
