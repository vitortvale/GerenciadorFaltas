import React from "react";
import { Onest } from 'next/font/google'
import Link from 'next/link'

const onestFont = Onest();

export default function RegisterButton() {
    return (
        <Link href='/signup'>
            <div className="flex justify-center  font-[Onest] font-medium">
                <button className=" rounded-4xl h-8 w-30 hover:scale-105 cursor-pointer">
                    <p className="text-zinc-800">Registrar</p>
                </button>
            </div>
        </Link>
    )
}