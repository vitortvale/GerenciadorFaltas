import React from "react";
import { Onest } from 'next/font/google'

const onestFont = Onest();

export default function RegisterButton() {
    return (
        <div className="flex justify-center  font-[Onest] font-medium">
            <button className=" rounded-4xl h-8 w-30">
                <p className="text-zinc-800">Registrar</p>
            </button>
        </div>
    )
}