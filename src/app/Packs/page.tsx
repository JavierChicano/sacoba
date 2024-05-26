import { selectsPacksModelo } from "@/db/selects";
import RutaPacks from "../components/packs/rutaPacks";
import ObjPack from "../components/packs/objPack";
import InfoSillasPacks from "../components/packs/infoSillasPacks";

export default async function Packs() {
  const packsModelo = await selectsPacksModelo();

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center lg:p-0 p-4">
        <RutaPacks />
        <InfoSillasPacks/>
        <aside className="w-full">
          <h1 className="text-4xl lg:text-5xl border-b-2 border-colorBase mb-5">Packs</h1>
        </aside>
        <ObjPack packsModelo={packsModelo} />
      </div>
    </main>
  );
}
