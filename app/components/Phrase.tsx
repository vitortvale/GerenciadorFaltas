import React from 'react'
import { Onest } from 'next/font/google'

const onestFont = Onest();


export default function Phrase() {
    return (
        <div>
            <h1 className="text-center mt-15 text-blue-950 text-8xl font-bold font-[Onest] tracking-tighter">
                Gerenciador de faltas
            </h1>
        </div>
    )
}