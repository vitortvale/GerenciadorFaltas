import React from "react";
import Phrase from "./components/Phrase";
import LoginButton from "@/app/components/LoginButton";
import RegisterButton from "@/app/components/RegisterButton";
import  Class, {ClassProps} from "@/app/components/ClassExample";
import Cto from "@/app/components/Cto";
import AddClassButton from "@/app/components/AddClassButton";
import AddClassButtonExample from "@/app/components/AddClassButton";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

const materia1: ClassProps = {
  classname: "Organização de Computadores",
  classcode: "DCC070",
  classdate: "Seg 14-16, Qua 14-16",
  absences: 4
};

const materia2: ClassProps = {
  classname: "Cálculo II",
  classcode: "MAT156",
  classdate: "Ter 14-16, Qui 16-18",
  absences: 6
};

const materia3: ClassProps = {
  classname: "Banco de Dados",
  classcode: "DCC060",
  classdate: "Seg 10-12, Sex 10-12",
  absences: 2
};




export default function Main() {
  return (
      <div>
        <SignedIn>
          <div className="p-3 flex justify-end border-b-1 border-zinc-5">
          <SignOutButton>
            <button>Sair</button>
          </SignOutButton>
            <p className="p-3">Dashboard</p>
          </div>
        </SignedIn>
        <SignedOut>
        <div className="p-3 flex justify-end">
            <RegisterButton/>
            <LoginButton/>
          </div>
        </SignedOut>
        <Phrase/>
        <Cto/>
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-row justify-center space-x-10 border-2 rounded-4xl p-20 bg-white w-min">
            <Class {...materia1}/>
            <Class {...materia2}/>
            <Class {...materia3}/>
            <AddClassButtonExample />
          </div>
        </div>
      </div>
  );
}