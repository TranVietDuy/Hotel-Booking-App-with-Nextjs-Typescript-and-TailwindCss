import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";

const googleId = process.env.GOOGLE_ID || "";
const googleSecret = process.env.GOOGLE_SECRET || "";
const auth0id = process.env.AUTH0_CLIENT_ID || "";
const auth0secret = process.env.AUTH0_CLIENT_SECRET || "";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: googleId,
            clientSecret: googleSecret,
        }),

        Auth0Provider({
            clientId: auth0id,
            clientSecret: auth0secret,
            issuer: process.env.AUTH0_ISSUER,
        }),
    ],
};

export default nextAuth(authOptions);
