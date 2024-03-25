import Link from "next/link";

export default function RutaPacks() {
  return (
    <div className="w-full py-10">
      <ul className="flex">
        <li className="text-gray-400">
          <Link href="/">Main</Link> |&nbsp;{" "}
        </li>
        <li>Packs</li>
      </ul>
    </div>
  );
}
