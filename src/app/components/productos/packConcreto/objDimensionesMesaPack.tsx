import { cn } from "@nextui-org/react";

type ObjMesaPacks = {
    dimension: string;
    selected: boolean;
    onSelect: (dimension: string) => void;
}

export default function ObjMesaPacks({ datos }: { datos: ObjMesaPacks }) {
    const { dimension, selected, onSelect } = datos;
    return (
        <div
            className={cn(
                selected ? "bg-colorBase" : "bg-fondoTerciario",
                "self-center p-2 cursor-pointer flex justify-center flex-grow"
            )}
            onClick={() => onSelect(dimension)}
        >
            {dimension}cm
        </div>
    );
}
