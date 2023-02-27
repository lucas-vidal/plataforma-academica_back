import { getConnection } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de calificaciones
export const getQualifications = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getQualifications)
        res.json(result.rows)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta de calificaciones de un curso
export const getQualificationByCourse = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getQualificationByCourse, [code]);
        res.send(result.rows);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta una calificacion por curso y dni
export const getQualificationByDniAndCourse = async (req, res) => {
    const { code, dni } = req.params;

    if (code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getQualificationByDniAndCourse, [code, dni]);
        res.send(result.rows[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Inserta un calificacion
export const addNewQualification = async (req, res) => {

    const { code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4 } = req.body

    if (code == null || dni == null ) {

        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool.query(querys.addNewQualification, [ code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4 ]);
        res.json({ code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4 });

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina una calificacion
export const deleteQualificationByDniAndCourse = async (req, res) => {
    const {code, dni } = req.params;

    if ( code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();
        const result = await pool.query(querys.deleteQualificationByDniAndCourse, [code, dni]);
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un calificacion
export const updateQualificationByDniAndCourse = async (req, res) => {

    const { qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4, give_ap1, give_ap2, give_ap3, give_ap4 } = req.body;
    const { code , dni } = req.params;

    if ( code == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
        const pool = await getConnection();
        await pool.query(querys.updateQualificationByDniAndCourse, [qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4, give_ap1, give_ap2, give_ap3, give_ap4, code, dni]);
        res.json({  code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4, give_ap1, give_ap2, give_ap3, give_ap4 });
    } catch (error) {

        res.status(500);
        res.status(error.message);
    };
}