import { Request, Response } from "express";
import PokemonService from "../services/PokemonService";

export function getAll(_: any, res: Response) {
    const pokemons = PokemonService.getAll();
    res.status(200).json(pokemons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del pokemon."}
        const pokemon = PokemonService.get(id);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getName(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el Name del pokemon."}
        const pokemon = PokemonService.getName(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getByType(req: Request, res: Response) {
    try {
        const type = req.params.type && req.params.type || undefined;
        if(!type){ throw "Se requiere el Tipo del pokemon."}
        const pokemons = PokemonService.getByType(type);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getAgainst(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere el Name del pokemon."}
        const pokemon = PokemonService.getAgainst(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getNewPokemon(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        const pokemons = PokemonService.getNewPokemon(name);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).send(error);
    }
}