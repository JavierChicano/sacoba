import { useState } from 'react';
import { cn } from "@nextui-org/react";

export default function ObjFormatoSilla({ formato, index, selected, onSelect }: { formato: string, index: number, selected: boolean, onSelect: (formato: string) => void }) {
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
