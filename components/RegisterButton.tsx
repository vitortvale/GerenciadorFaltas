import React from "react";
import { Onest } from 'next/font/google'

const onestFont = Onest();

export default function RegisterButton() {
    return (
        <div className="flex justify-center  font-[Onest] font-thin">
            <button className=" rounded-4xl h-10 w-30">
                <p className="text-zinc-800">Registrar</p>
            </button>
        </div>
    )
}