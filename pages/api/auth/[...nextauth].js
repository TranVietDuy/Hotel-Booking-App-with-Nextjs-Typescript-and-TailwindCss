import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

const googleId = process.env.GOOGLE_ID || "";
const googleSecret = process.env.GOOGLE_SECRET || "";
const auth0id = process.env.AUTH0_CLIENT_ID || "";
const auth0secret = process.env.AUTH0_CLIENT_SECRET || "";
const githubId = process.env.GITHUB_ID || "";
const githubSecret = process.env.GITHUB_SECRET || "";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: googleId,
            clientSecret: googleSecret,
        }),

        GitHubProvider({
            clientId: githubId,
            clientSecret: githubSecret,
        }),

        Auth0Provider({
            clientId: auth0id,
            clientSecret: auth0secret,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
};

export default nextAuth(authOptions);
