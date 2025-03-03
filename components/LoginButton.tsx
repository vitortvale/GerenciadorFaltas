import React from "react";
import { Onest } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"


const onestFont = Onest();


export default function LoginButton() { 
        return (
            <div className="flex justify-center  font-[Onest] font-thin ">
                <button className="bg-blue-800 rounded-4xl h-10 w-30  ">    
                    <p className="text-green-50">Fazer login</p>
                </button>
            </div>
        )
}