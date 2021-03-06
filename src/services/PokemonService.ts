import e from "express";
import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module PokemonService {
    export function getAll(): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        return pokemons
    }
    export function get(id: number): PokemonI {
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.id === id);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }
    export function getName(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        const matches: Array<PokemonI> = pokemons.filter(function (el) {
            const pokeName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return comparationName.toLowerCase().indexOf(pokeName.toLowerCase()) > -1;
        })
        if (matches.length < 1) {
            throw "No se encontró el pokemon"
        }
        return matches;
    }
    export function getByType(type: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matches: Array<PokemonI> = [];
        pokemons.forEach(pokemon => {
            const found = pokemon.type.filter(function (el) {
                const pokeType = type.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                console.log(pokeType,comparationName);
                return comparationName.toLowerCase().indexOf(pokeType.toLowerCase()) > -1;
            })

            if (found.length > 0) {
                matches.push(pokemon);
            }
        })

        if (matches.length < 1) {
            throw "No se encontró el tipo"
        }
        return matches;
    }
    export function getAgainst(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matchesStrong: Array<PokemonI> = [];
        let matchesWeak: Array<PokemonI> = [];
        let pokemon: Array<PokemonI> = pokemons.filter(function (el) {
            const pokeName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return comparationName.toLowerCase().indexOf(pokeName.toLowerCase()) > -1;
        })

        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        } else {
            pokemon = pokemon.filter(function (el) {
                const nombre = el.name;
                const status = el.type.filter(e => {
                    let tipo = e.name;
                    pokemons.forEach(pokemon => {
                        const comparation = pokemon.type.filter(z => {
                            for (let i = 0; i < z.weakAgainst.length; i++) {
                                const element = z.weakAgainst[i];
                                if (element.toString() == tipo) {
                                    matchesStrong.push(pokemon);
                                }
                            }
                            for (let j = 0; j < z.strongAgainst.length; j++) {
                                const element = z.strongAgainst[j];
                                if (element.toString() == tipo) {
                                    matchesWeak.push(pokemon);
                                }
                            }
                        })
                    })
                    matchesStrong.filter(name => {
                        const nameStrong = name.name;
                        matchesWeak.filter(name => {
                            const nameWeak = name.name;
                            throw "Nombre: " + nombre + " Tipo: " + e.name + " Es fuerte contra: " + nameStrong + " Es débil contra: " + nameWeak;
                        })
                    })
                })
            });
            return pokemon;
        }
    }
    export function getNewPokemon(name: string): Array<PokemonI> {
        console.log("entre en newpokemon");
        const pokemons: Array<PokemonI> = db;
        let pokemonNew = [];
        pokemonNew.push(name);
        var splitted = name.split(",");

        throw "Nombre: "+splitted[0]+ " Tipo: " +splitted[1]+ " Es fuerte contra: " +splitted[2]+ " Es débil contra: " +splitted[3]+ " Img: " + splitted[4];
    }
}

export default PokemonService;