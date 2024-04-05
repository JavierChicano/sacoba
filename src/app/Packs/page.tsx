import { selectsPacksModelo, selectsPacksTotales } from "@/db/selects";
import RutaPacks from "../components/packs/rutaPacks";
import ObjPack from "../components/packs/objPack";

export default async function Packs() {

  const packsModelo = await selectsPacksModelo();

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <RutaPacks />
        <ObjPack packsModelo={packsModelo} />
      </div>
    </main>
  );
}
