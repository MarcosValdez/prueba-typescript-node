import { createPool } from 'mysql';
import { promisify } from 'util'; 

import { db } from './config';

export async function connect() {
    try{
        const connection:any = await createPool(db);
        connection.query = promisify(connection.query);
        console.log("exito db")
        return connection;
    }catch(e){
        console.error(e);
    }
}