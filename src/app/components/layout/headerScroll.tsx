import Image from "next/image";

export default function HeaderScroll() {
  return (
    <ul className=" items-center hidden">
      <li className="bg-fondoSecundario border-l-[1px] border-y-[1px] border-colorBase p-4 rounded-l-full  w-36 flex justify-center text-xl hover:bg-colorBaseSecundario hover:text-black cursor-pointer">
        <h1 className="">Outlet</h1>
      </li>
      <li className="bg-fondoSecundario border-y-[1px] border-colorBase p-4 w-36 flex justify-center text-xl hover:bg-colorBaseSecundario hover:text-black cursor-pointer">
        Packs
      </li>
      <li>
        <Image
          className="h-48 w-auto cursor-pointer"
          src="/logo.png"
          alt="Logo de la marca"
          width={256}
          height={256}
        />
      </li>
      <li className="bg-fondoSecundario border-y-[1px] border-colorBase p-4 w-36 flex justify-center text-xl hover:bg-colorBaseSecundario hover:text-black cursor-pointer">
        Productos
      </li>
      <li className="bg-fondoSecundario border-r-[1px] border-y-[1px] border-colorBase p-4 rounded-r-full w-36 flex justify-center text-xl hover:bg-colorBaseSecundario hover:text-black cursor-pointer">
        Contacto
      </li>
    </ul>
  );
}
