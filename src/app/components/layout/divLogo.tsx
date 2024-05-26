import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import BotonesHeaderMovil from "./botonesHeaderMovil";
import { useState } from "react";

export default function DivLogo() {
  const [ verNav, setVerNav ] = useState(false)
  return (
    <div className="flex items-center justify-around w-full mt-5">
      <Link href="/">
        <div className="h-auto w-24 lg:w-32 cursor-pointer bg-white rounded-3xl flex align-middle p-5">
          <Image
            className="w-auto h-auto"
            src="/logo.png"
            alt="Logo de la marca"
            width={256}
            height={256}
          />
        </div>
      </Link>
      <Link className="text-[40px] block lg:hidden" href="/">Sacoba</Link>
      <IconMenu2 className="lg:hidden block" onClick={()=>setVerNav(true)} size={50}/>
      {verNav && <BotonesHeaderMovil onClose={()=>setVerNav(false)}/>}
    </div>
  );
}
