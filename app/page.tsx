import React from "react";
import Phrase from '../components/Phrase';
import LoginButton from "@/components/LoginButton";
import RegisterButton from "@/components/RegisterButton";
import  Class, {ClassProps} from "@/components/Class";
import Cto from "@/components/Cto";
import AddClassButton from "@/components/AddClassButton";

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
      <div className="p-3 flex justify-end ">
        <RegisterButton/>
        <LoginButton/>
      </div>
      <Phrase/>
      <Cto/>
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center space-x-10 border-2 rounded-4xl  p-20 bg-zinc-100">
          <Class {...materia1}/>
          <Class {...materia2}/>
          <Class {...materia3}/>
          <AddClassButton />
        </div>
      </div>
    </div>
  );
}