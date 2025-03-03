import React from "react"
import { Onest } from 'next/font/google'

const onest = Onest()

export default function Cto() {
    return (
        <div className="flex justify-center mt-2">
            <h2 className="text-zinc-400 text-[20px] font-[Onest] p-5">Um projeto criado para alunos da UFJF terem total controle de suas frequências</h2>
        </div>
    )
}

