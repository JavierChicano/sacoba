import { Button } from "@nextui-org/react";
import SecccionInfo from "./components/main/seccionInfo";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-6xl text-white mt-20 animate-slide-in-bottom animate-duration-slower">
        Encuentra la mesa que encaje contigo
      </h1>

      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-20"
      >
        Button
      </Button>
      <SecccionInfo/>
    </main>
  );
}
