export default function DesplegableLogin() {
  return (
    <section className="absolute pt-2 right-[10%]">
      <div className="bg-fondoSecundario p-2">
      <ul className="flex flex-col gap-4 justify-center w-full p-1">
        <li className="border border-fondoTerciario cursor-pointer p-2 flex justify-center hover:bg-colorBase">Registrarse</li>
        <li className="bg-fondoTerciario cursor-pointer p-2 flex justify-center hover:bg-colorBase">Iniciar sesión</li>
      </ul>
      </div>
      
    </section>
  );
}
