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
        clientId: "13803054790-ppdtei4h3f29pa2popr8dhntevq0fvbn.apps.googleusercontent.com",
        clientSecret: "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",
        // clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
        // clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
      }),
      FacebookProvider({
        clientId: "1401432350782174",
        clientSecret: "cc6d555fe654366363dcd0cc07544d31",
        // clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
        // clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string,
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