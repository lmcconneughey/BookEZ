import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcryptjs"
//authenticate using register data/mongoDB


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    const user = await prisma.user.findUnique({
                        where: {
                          email: req.params.email
                        }
                      })
                    
                    if(user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        console.log(isMatch);
                        
                        if(isMatch) {
                            return user
                        } else {
                            throw new Error("Check your password!") 
                        }
                    } else {
                        throw new Error("user not found")
                    }
                } catch (error) {
                    throw new Error(error.message)
                }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }           
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                }
            }           
        })
    ]
  })
