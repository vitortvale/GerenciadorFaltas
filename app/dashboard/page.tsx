import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth()
  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>
  }
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()
  // Use `user` to render user details or create UI elements
  return (
    <div>
      <h1>Olá {user?.username}</h1>
    <div className="flex justify-end">
      <img className="h-20 w-20 rounded-full p-4" src ={user?.imageUrl}></img>
    </div>
    </div>
  )
}