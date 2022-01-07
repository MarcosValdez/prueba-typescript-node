import { Request, Response } from "express";

import { connect } from "../../../database";

export async function getPortafolio(req: Request, res: Response): Promise<any> {
    try{
        const conn = await connect();
        const portafolio = await conn?.query('SELECT * FROM portafolio');
        console.log(portafolio, "sdasf");
        return res.json(portafolio);
    }catch(err){
        console.log(err);
    }
    /* return res.json("prueba 2.1") */
}