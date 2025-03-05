'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { Onest } from 'next/font/google'

const onest = Onest()

//https://developers.google.com/identity/branding-guidelines?hl=pt-br

export default function SignInPage() {
  return (
    <div className="flex justify-center">
    <div className="mt-30 border-2 w-130 h-80 bg-blue-700 border-zinc-400 rounded-md shadow-md shadow-zinc-500">
        <h1 className="font-black font-[Onest] text-4xl">Faça login para continuar</h1>
      <div className="flex-column p-8">
        <div className="flex justify-center mt-40">
          <SignIn.Root>
            <SignIn.Step name="start">
                  <Clerk.Connection name="google">
                    <div className="text-xl font-medium border-zinc-600 text-zinc-800 w-60 bg-zinc-100 p-3 border-2 rounded-md">
                      Logar com o Google
                    </div>
                  </Clerk.Connection>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
    </div>
    </div>
  )
}