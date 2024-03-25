import { selectsPacksModelo, selectsPacksTotales } from "@/db/selects";
import RutaPacks from "../components/packs/rutaPacks";
import ObjPack from "../components/packs/objPack";

export default async function Packs() {
  const promisePacksModelo = selectsPacksModelo();
  const promisePacksTotales = selectsPacksTotales();

  const [packsModelo, packsTotales] = await Promise.all([
    promisePacksModelo,
    promisePacksTotales,
  ]);

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <RutaPacks />
        <ObjPack packsModelo={packsModelo} packsTotales={packsTotales} />
      </div>
    </main>
  );
}
