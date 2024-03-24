export default function DesplegableLogin() {
  return (
    <section className="absolute bg-fondoSecundario p-2 right-[10%]">
      <ul className="flex flex-col gap-2 justify-center w-full">
        <li className="border border-fondoTerciario cursor-pointer">Registrarse</li>
        <li className="bg-fondoTerciario cursor-pointer p-2">Iniciar sesión</li>
      </ul>
    </section>
  );
}
