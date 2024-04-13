import { cn } from "@nextui-org/react";

type ObjFormatoSillaParams = {
    formato: string;
    selected: boolean;
    onSelect: (formato: string) => void;
}

export default function ObjFormatoSilla({datos}:{datos: ObjFormatoSillaParams}) {
    const { formato, selected, onSelect } = datos;
    return (
        <div
            className={cn(
                selected ? "bg-colorBase" : "bg-fondoTerciario", 
                "self-center p-2 cursor-pointer flex justify-center", "flex-grow"
            )}
            onClick={() => onSelect(formato)} 
        >
            {formato}
        </div>
    );
}
