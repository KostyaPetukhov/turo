import type { AuthOptions, User } from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
      AppleProvider({
        clientId: process.env.APPLE_ID as string,
        clientSecret: process.env.APPLE_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
      }),
      FacebookProvider({
        clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string,
      }),
      Credentials({
        credentials: {
          email: {label: 'email', type: 'email', required: true},
          password:{label: 'password', type: 'password', required: true}
        },
        async authorize(credentials){
          if( !credentials?.email || !credentials?.password) return null
          // тут будет логика работы с юзером
          const users: any = [{email: "kosyak971@gmail.com", image: "https://lh3.googleusercontent.com/a/ACg8ocJlKQOR61irjqwS1ue-c7KqjuiCY8WWFQneg2LlvLNSJw=s96-c", name: "Kostya Petukhov", password: '1111'}];
          const currentUser = users.find((user: { email: string; }) => user.email === credentials.email)

          if (currentUser && currentUser.password === credentials.password) {
            const {password, ...userWithoutPass} = currentUser;
            return userWithoutPass as User
          }
          return null 
        }
      })
    ],
    pages: {
      signIn: "/signin",
    },
  }