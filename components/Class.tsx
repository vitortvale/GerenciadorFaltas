import React from "react";
import internal from "stream";

export type ClassProps = {
    classname: string;
    classcode: string;
    classdate: string;
    absences: number;
  };

export default function Class( props: ClassProps ) {
    
    let shadowcolor;
    let situation = props.absences
    if(situation <= 2) {
         shadowcolor = "shadow-green-400";
    }
    else if(situation > 2 && situation <= 4) {
         shadowcolor = "shadow-yellow-400";
    }
    if(situation >= 5) {
         shadowcolor = "shadow-red-400";
    }

    return (
        <div className={shadowcolor}>
            <div className="flex-col  text-zinc-800 border-zinc-600 border-2 justify-items-center
            bg-white rounded-2xl h-70 p-2 w-60 shadow-xl font-black ">
                <div className={shadowcolor}></div>
                    <h1 className=" py-4 font-medium text-2xl">{props.classcode}</h1>
                    <h2 className=" pt-6 font-thin">{props.classname}</h2>
                    <h2 className=" pt-6 font-thin">{props.classdate}</h2>
                    <h1 className=" pt-6 ">Faltas restantes: {props.absences}</h1>
                </div>
        </div>
    )
}