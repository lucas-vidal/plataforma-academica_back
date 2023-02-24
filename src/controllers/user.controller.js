import { getConnection, pg } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Alumnos
export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        // const result = await pool.query('SELECT * FROM users')
        console.log(result.rows)
        // res.json(result.rows)
    } catch (error) {
        res.status(500);
        res.status(error.message);
        console.log('error')
    }
}