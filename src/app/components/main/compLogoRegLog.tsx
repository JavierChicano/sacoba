import Image from "next/image";
import Link from "next/link";

export default function CompoLogo() {
  return (
    <section className="p-24 ml-2 h-full overflow-hidden hidden sm:block z-10">
      <header className="flex items-center text-6xl gap-10">
        <Link href="/">
          <div className="h-auto w-24 cursor-pointer bg-white rounded-3xl flex align-middle p-3">
            <Image
              className="w-auto h-auto"
              src="/logo.png"
              alt="Logo de la marca"
              width={256}
              height={256}
            />
          </div>
        </Link>
        <h1 className="text-black">Sacoba</h1>
      </header>
    </section>
  );
}
