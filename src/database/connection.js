// import sql from 'mssql'
import config from '../config.js';
import pg from 'pg'
// const { Pool } = require('pg')
 
const dbSettings = {
    user : config.dbUser,
    password : config.dbPassword,
    host : config.dbServer,
    database : config.dbDatabase,
    port: config.dbPort
    
};

export async function getConnection(){
    try {
        const pool = new pg.Pool({dbSettings});
        return pool;
    } catch (error) {
        console.log(error);
    } 
}
export { pg };