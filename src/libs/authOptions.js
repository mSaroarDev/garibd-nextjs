import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import userModel from "@db/models/users";
import { connectDB } from "@db/connectDB";

export const authOptions = {
  site: process.env.NEXTAUTH_URL,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",

      credentials: {},
      async authorize(credentials, req) {
        await connectDB();

        const { email, password } = credentials;

        try {
          const existUser =
            (await userModel.findOne({ email: email })) ||
            (await userModel.findOne({ mobile: email }));

          if (!existUser) {
            return null;
          }

          if (existUser) {
            const isValidPassword = await bcrypt.compare(
              password.toString(),
              existUser?.password
            );

            if (!isValidPassword) {
              return null;
            }

            return existUser;
          }
        } catch (error) {
          console.error("Error", error);
        }
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-in",
  },

  callbacks: {
    async signIn({ user, account }) {
      // storing the data to the database
      if (account.provider === "google") {
        const { name, email, image } = user;

        try {
          const res = await fetch(
            process.env.NEXTAUTH_URL + "/api/auth/nextauth-registers",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                image,
              }),
            }
          );
          if (res.ok) {
            return user;
          }
        } catch (error) {}
      }

      if (account.provider === "facebook") {
        const { name, email, image } = user;
        try {
          const res = await fetch(
            process.env.NEXTAUTH_URL + "/api/auth/nextauth-registers",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                image,
              }),
            }
          );
          if (res.ok) {
            return user;
          }
        } catch (error) {}
      }
      return user;
    },

    async session({ session }) {
      const mongodbUser = await userModel.findOne({
        email: session.user?.email,
      });
      session.user.id = mongodbUser._id.toString();

      session.user = { ...session.user, ...mongodbUser._doc };

      return session;
    },
  },
};
