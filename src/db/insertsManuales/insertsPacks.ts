import { db } from "..";
import { packs } from "../schema";

export async function insertarPacks() {
  // modificar la ruta de la imagen en el insert
  const newPack = await db.insert(packs).values([
    //INSERTS PACK 1
    {
      modelo: "Basic",
      imagenMesa: "basic.png",
      descripcion: "Mesa de libro, con cajón opcional",
      materialTapa: "cristal 3mm",
      dimensiones: "70x35(70x70), 80x40(80x80), 90x45(90x90)",
      precio: "183, 191, 202",
    },
    {
      modelo: "Basic",
      imagenMesa: "basic.png",
      descripcion: "Mesa de libro, con cajón opcional",
      materialTapa: "laminado",
      dimensiones: "70x35(70x70), 80x40(80x80), 90x45(90x90)",
      precioCajon: 39,
      precio: "173, 181, 191",
    },
    {
      modelo: "Basic",
      imagenMesa: "basic.png",
      descripcion: "Mesa de libro, con cajón opcional",
      materialTapa: "laminado ECO",
      dimensiones: "70x35(70x70), 80x40(80x80), 90x45(90x90)",
      precioCajon: 39,
      precio: "159, 166, 173",
    },

    //INSERTS PACK 2
    {
      modelo: "CALPE",
      imagenMesa: "calpe.png",
      descripcion: "Mesa extensible frontal, guías automáticas",
      materialTapa: "cristal 3mm",
      dimensiones:
        "80x40(80x68), 90x45(90x79), 100x50(100x84), 100x60(100x94)",
      precio: "265, 278, 299, 308",
    },
    {
      modelo: "CALPE",
      imagenMesa: "calpe.png",
      descripcion: "Mesa extensible frontal, guías automáticas",
      materialTapa: "laminado",
      dimensiones:
        "80x40(80x68), 90x45(90x79), 100x50(100x84), 100x60(100x94)",
      precio: "256, 267, 284, 293",
    },
    {
      modelo: "CALPE",
      imagenMesa: "calpe.png",
      descripcion: "Mesa extensible frontal, guías automáticas",
      materialTapa: "laminado ECO",
      dimensiones:
        "80x40(80x68), 90x45(90x79), 100x50(100x84), 100x60(100x94)",
      precio: "236, 245, 259, 265",
    },

    //INSERTS PACK 3
    {
      modelo: "MALTA",
      imagenMesa: "malta.png",
      descripcion:
        "Mesa extensible lateral, guías automáticas, con cajón opcional",
      materialTapa: "cristal 3mm",
      dimensiones:
        "90x45(150x45), 100x50(160x50), 100x60(160x60), 110x70(170x70)",
      precioCajon: 39,
      precio: "274, 293, 303, 327",
    },
    {
      modelo: "MALTA",
      imagenMesa: "malta.png",
      descripcion:
        "Mesa extensible lateral, guías automáticas, con cajón opcional",
      materialTapa: "laminado",
      dimensiones:
        "90x45(150x45), 100x50(160x50), 100x60(160x60), 110x70(170x70)",
      precioCajon: 39,
      precio: "253, 269, 278, 296",
    },
    {
      modelo: "MALTA",
      imagenMesa: "malta.png",
      descripcion:
        "Mesa extensible lateral, guías automáticas, con cajón opcional",
      materialTapa: "laminado ECO",
      dimensiones:
        "90x45(150x45), 100x50(160x50), 100x60(160x60), 110x70(170x70)",
      precioCajon: 39,
      precio: "232, 245, 252, 264",
    },

    //INSERTS PACK 4
    {
      modelo: "AURA",
      imagenMesa: "aura.png",
      descripcion: "Mesa ampliable, bastidor de carro",
      materialTapa: "cristal 3mm",
      dimensiones: "100x60(160x60), 110x70(170x70), 120x80(180x80)",
      precio: "356, 371, 386",
    },
    {
      modelo: "AURA",
      imagenMesa: "aura.png",
      descripcion: "Mesa ampliable, bastidor de carro",
      materialTapa: "laminado",
      dimensiones: "100x60(160x60), 110x70(170x70), 120x80(180x80)",
      precio: "341, 351, 362",
    },
    {
      modelo: "AURA",
      imagenMesa: "aura.png",
      descripcion: "Mesa ampliable, bastidor de carro",
      materialTapa: "laminado ECO",
      dimensiones: "100x60(160x60), 110x70(170x70), 120x80(180x80)",
      precio: "318, 323, 329",
    },
  ]);
}
