'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
  return (
    <SignUp.Root>
      <SignUp.Step name="start">
        <h1>Create an account</h1>
        <Clerk.Connection name="google">Sign up with Google</Clerk.Connection>
      </SignUp.Step>
    </SignUp.Root>
  )
}