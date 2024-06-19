import { cn } from "@nextui-org/react";

type ObjColorBastidor = {
    color: string;
    selected: boolean;
    onSelect: (dimension: string) => void;
}

export default function ObjColorBastidor({ datos }: { datos: ObjColorBastidor }) {
    const { color, selected, onSelect } = datos;
    return (
        <div
            className={cn(
                selected ? "bg-colorBase" : "bg-fondoTerciario",
                "self-center p-2 cursor-pointer flex justify-center flex-grow max-w-fit"
            )}
            onClick={() => onSelect(color)}
        >
            {color}
        </div>
    );
}
