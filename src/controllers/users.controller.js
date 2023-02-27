import { getConnection } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de Alumnos
export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getUsers)
        res.json(result.rows)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un Alumno por dni
export const getUserByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getUserByDni, [dni]);
        res.send(result.rows[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un Alumnos por carrera
export const getUserByCareer = async (req, res) => {
    const { career } = req.params;

    if (career == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getUserByCareer, [career]);
        res.send(result.rows);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad alumnos
export const countTotalUsersStudents = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool.query(querys.countTotalUsersStudents);
    res.json(result.rows[0]);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad docentes
export const countTotalUsersTeachers = async (req, res) => {
    try {
    const pool = await getConnection();
    const result = await pool.query(querys.countTotalUsersTeachers);
    res.json(result.rows[0]);

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo usuario
export const addNewUser = async (req, res) => {
    const { dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin } = req.body

    if (dni == null || name == null || surname == null || date_of_brith == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        await pool.query(querys.addNewUser, [dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin]);
        res.json({ dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}



//Elimina un alumno por dni
export const deleteUserByDni = async (req, res) => {
    const { dni } = req.params;

    if (dni == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.deleteUserByDni, [dni]);
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un alumno
export const updateUserByDni = async (req, res) => {

    const { name, surname, date_of_brith, date_of_admission, career, password, teacher, admin } = req.body;
    const { dni } = req.params;

    if (name == null || surname == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
            
    try {
        const pool = await getConnection();
        await pool.query(querys.updateUserByDni, [name, surname, date_of_brith, date_of_admission, career, password, teacher, admin, dni]);
        res.json({ name, surname, date_of_brith, date_of_admission, career, password, teacher, admin });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    };
}

//Actualiza un password
export const updatePasswordByDni = async (req, res) => {

    const { password } = req.body;
    const { dni } = req.params;

    if (password == null || dni == null ) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
            
    try {
        const pool = await getConnection();
        await pool.query(querys.updatePasswordByDni, [ password, dni]);
        res.json({ password, dni });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    };
}