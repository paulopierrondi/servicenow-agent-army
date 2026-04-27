import NextAuth, { type AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const providers: AuthOptions["providers"] = [];

if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  );
}

export const authOptions: AuthOptions = {
  providers,
  session: { strategy: "jwt" },
  // Without NEXTAUTH_SECRET the helper still works in dev; Next will warn
  // in prod where the env var must be set.
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
