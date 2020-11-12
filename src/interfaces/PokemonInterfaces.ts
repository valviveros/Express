import { MonsterTypeI } from "./MonsterTypeI";

export interface PokemonI {
    name: string
    number: number
    type: Array<MonsterTypeI>
    img: string
}
