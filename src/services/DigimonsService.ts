import { DigimonI } from "../interfaces/DigimonInterfaces";
const db = require('../db/Digimons.json');

module DigimonsService { 
    export function getAll(): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        return digimons
    }
    export function get(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
}

export default DigimonsService;
