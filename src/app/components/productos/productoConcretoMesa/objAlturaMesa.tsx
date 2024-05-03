import { cn } from "@nextui-org/react";

type ObjColorBastidor = {
    altura: string;
    selected: boolean;
    onSelect: (dimension: string) => void;
}

export default function ObjAlturaMesa({ datos }: { datos: ObjColorBastidor }) {
    const { altura, selected, onSelect } = datos;
    return (
        <div
            className={cn(
                selected ? "bg-colorBase" : "bg-fondoTerciario",
                "self-center p-2 cursor-pointer flex justify-center flex-grow max-w-32"
            )}
            onClick={() => onSelect(altura)}
        >
            {altura}cm
        </div>
    );
}
