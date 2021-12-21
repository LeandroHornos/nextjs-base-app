import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    /*     Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }), */
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;
      // console.log("Sesion con id", session)
      return Promise.resolve(session);
    },
  },
  pages: { signIn: "/login" },
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
