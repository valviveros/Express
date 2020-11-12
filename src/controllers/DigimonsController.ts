import { Request, Response } from "express";
import DigimonsService from "../services/DigimonsService";

export function getAll(_: any, res: Response) {
    const digimons = DigimonsService.getAll();
    res.status(200).json(digimons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.get(id);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
}
