import userModel from "@app/db/models/users";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  site: process.env.NEXTAUTH_URL,
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "credentials",

      credentials: {},
      async authorize(credentials, req) {
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

            console.log(existUser);
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
    // async signIn({ user, account }) {
    //   // storing the data to the database
    //   if (account.provider === "google") {
    //     const { name, email, image } = user;
    //     try {
    //       const res = await fetch(
    //         process.env.NEXTAUTH_URL + "/api/user/nextauth-signup",
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({
    //             name: name,
    //             email: email,
    //             image: image,
    //           }),
    //         }
    //       );
    //       if (res.ok) {
    //         return user;
    //       }
    //     } catch (error) {}
    //   }
    //   return user;
    // },
  },
};
