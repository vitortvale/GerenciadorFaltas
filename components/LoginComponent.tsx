import React from "react"
import { Onest } from 'next/font/google'

const onest = Onest()

export default function LoginComponent() {
    return (
        <div>
            
            <button className="bg-green0700 border-b-4-red-100 rounded-2xl px-20 py-4 text-slate-50 font-[Onest]">
                Login
            </button>
        </div>
    )
}