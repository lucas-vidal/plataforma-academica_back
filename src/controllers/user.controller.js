import { getConnection } from "../database/connection.js";
import querys from "../database/querys.js";







// const pool = await getConnection();
// const result = await pool.request()
// .query(querys.getUsers)
// res.json(result.recordsets)





//Consulta la tabla de Alumnos
export const getUser = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getUsers)
        res.json(result.rows)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}