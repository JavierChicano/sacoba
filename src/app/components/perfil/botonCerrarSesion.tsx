"use client";
import LogOut from './cerrarSesionCookie';
import { useRouter } from 'next/navigation';

export default function CerrarSesion() {
  const router = useRouter();

  const handleBoton = async () => {
    const response = await LogOut();
    if (response) {
      router.push('/');
    } else {
      console.log('Ha sucedido un error');
    }
  };
  return (
      <button className="bg-red-300 p-2 text-black cursor-pointer" onClick={handleBoton}>
        Cerrar sesion
      </button>
  );
}
