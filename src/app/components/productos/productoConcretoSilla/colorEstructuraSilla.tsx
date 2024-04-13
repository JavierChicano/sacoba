import { cn } from "@nextui-org/react";

type ColorEstructuraSillaParams = {
    color: string;
    selected: boolean;
    onSelect: (color: string) => void;
}

export default function ColorEstructuraSilla({datos}:{datos: ColorEstructuraSillaParams}){
    const { color, selected, onSelect } = datos;
    return(
        <div
        className={cn(
            selected ? "bg-colorBase" : "bg-fondoTerciario", 
            "self-center p-2 cursor-pointer flex justify-center", "flex-grow"
        )}
        onClick={() => onSelect(color)} 
    >
        {color}
    </div>
    )
}