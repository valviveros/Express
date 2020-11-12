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
    export function getName(name: string): DigimonI {
        const digimons: Array<DigimonI> = db;
        const matches: Array<DigimonI> = digimons.filter(function (el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el digimon"
        }
        return matches[0];
    }
    export function getByType(type: string): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        let matches: Array<DigimonI> = [];
        digimons.forEach(digimon => {
            const found = digimon.type.filter(e => e.name === type);
            if (found.length>0) {
                matches.push(digimon);
            }
        })
         
        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }
}

export default DigimonsService;
