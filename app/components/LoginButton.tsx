import React from "react";
import { Onest } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
 

const onestFont = Onest();


export default function LoginButton() { 
        return (
            <Link href="/sign-in">
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-zinc-950 
                    border-1 border-zinc-950 border-b-3 border-s-zinc-950 rounded-md h-8 w-30">    
                        <p className="text-zinc-950 font-medium">Fazer login</p>
                    </button>
                </div>
            </Link>
        )
}