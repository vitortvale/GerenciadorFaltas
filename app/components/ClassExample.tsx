import React from "react";
import internal from "stream";
import AddFaltaExample from "./AddFaltaExample";

export type ClassProps = {
    classname: string;
    classcode: string;
    classdate: string;
    absences: number;
  };

export default function Class( props: ClassProps ) {

    return (
            <div className="flex-col  text-zinc-800 border-zinc-600 border-2 justify-items-center
            bg-white rounded-2xl h-70 p-2 w-60 shadow-xl ">
                    <h1 className=" py-4 font-bold text-2xl border-b-1 border-zinc-0 w-full text-center ">{props.classcode}</h1>
                    <h2 className=" pt-6 font-thin">{props.classname}</h2>
                    <h2 className=" pt-6 font-thin">{props.classdate}</h2>
                    <AddFaltaExample />
                    <h1 className=" pt-1 font-black">Faltas restantes: {props.absences}</h1>
                </div>
    )
}