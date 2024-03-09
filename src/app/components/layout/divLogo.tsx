import Image from "next/image";
import Link from "next/link";

export default function DivLogo() {
  return (
    <Link href="/">
      <div className="h-auto w-32 cursor-pointer bg-white rounded-3xl flex align-middle p-5 mt-5">
        <Image
          className="w-auto h-auto"
          src="/logo.png"
          alt="Logo de la marca"
          width={256}
          height={256}
        />
      </div>
    </Link>
  );
}
