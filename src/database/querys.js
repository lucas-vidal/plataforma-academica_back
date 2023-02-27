export default{

    //Usuarios
    getUsers : 'SELECT * FROM users ORDER BY name DESC',
    getUserByDni : 'SELECT * FROM users WHERE dni = $1',
    getUserByCareer : 'SELECT * FROM users WHERE career = $1',
    countTotalUsersStudents : 'SELECT COUNT (*) FROM users WHERE teacher = false AND admin = false',
    countTotalUsersTeachers : 'SELECT COUNT (*) FROM users WHERE teacher = true',
    addNewUser : 'INSERT INTO users (dni, name, surname, date_of_brith, date_of_admission, career, password, teacher, admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    deleteUserByDni : 'DELETE FROM users WHERE dni = $1',
    updateUserByDni : 'UPDATE users SET name = $1, surname = $2, date_of_brith = $3, date_of_admission = $4, career = $5, password = $6, teacher = $7, admin = $8 WHERE dni = $9',
    updatePasswordByDni : 'UPDATE users SET password = $1 WHERE dni = $2',


    //Calificaciones
    getQualifications : 'SELECT * FROM qualifications',
    getQualificationByCourse : 'SELECT * FROM qualifications WHERE code = $1',
    getQualificationByDniAndCourse : 'SELECT * FROM qualifications WHERE dni = $1 and code = $2',
    addNewQualification : 'INSERT INTO qualifications (code, dni, qual_1, qual_2, qual_3, qual_4, ap1, ap2, ap3, ap4, give_ap1, give_ap2, give_ap3, give_ap4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
    deleteQualificationByDniAndCourse : 'DELETE FROM qualifications WHERE code = $1 and dni = $2',
    updateQualificationByDniAndCourse : 'UPDATE qualifications SET qual_1 = $1, qual_2 = $2, qual_3 = $3, qual_4 = $4, ap1 = $5, ap2 = $6, ap3 = $7, ap4 = $8, give_ap1 = $9, give_ap2 = $10, give_ap3 = $11, give_ap4 = $12 WHERE code = $13 and dni = $14',
    
    //Cursos
    getCourses : 'SELECT * FROM courses',
    getCourseByCode : 'SELECT * FROM courses WHERE code = $1',
    getCourseByCareer : 'SELECT * FROM courses WHERE career = $1',
    addNewCourse : 'INSERT INTO courses (code, name, career, season, teacher, date_test1, date_test2, date_test3, date_test4, date_ap1, date_ap2, date_ap3, date_ap4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
    deleteCourseByCode : 'DELETE FROM courses WHERE code = $1 ',
    updateCourseByCode : 'UPDATE courses SET name = $1, career = $2, season = $3, teacher = $4, date_test1 = $5, date_test2 = $6, date_test3 = $7, date_test4 = $8, date_ap1 = $9, date_ap2 = $10, date_ap3 = $11, date_ap4 = $12 WHERE code = $13',
    
    //Inscripciones
    getEnrollments : 'SELECT * FROM enrollment ORDER BY code DESC',
    getEnrollmentByCode : 'SELECT * FROM enrollment WHERE code = $1',
    getEnrollmentByDni : 'SELECT * FROM enrollment WHERE dni = $1',
    addNewEnrollment :'INSERT INTO enrollment (code, dni) VALUES ( $1, $2)',
    deleteEnrollmentByDni : 'DELETE FROM enrollment WHERE code = $1 and dni = $2',
    updateEnrollmentByDni : 'UPDATE enrollment SET code = $1, dni = $2 WHERE code = $3 and dni = $4',

    //Notificaciones
    getNotifications : 'SELECT * FROM notifications ORDER BY id DESC',
    getNotificationsByToDni : 'SELECT * FROM notifications WHERE to_dni = $1',
    getNotificationsByFromDni : 'SELECT * FROM notifications WHERE from_dni = $1',
    getNotificationById : 'SELECT * FROM notifications WHERE id = $1',
    addNewNotification : 'INSERT INTO notifications (datatime, subject, from_dni, to_dni, message) VALUES ($1, $2, $3, $4, $5)',
    deleteNotificationById : 'DELETE FROM notifications WHERE id = $1',
    updateNotificationById : 'UPDATE notifications SET datatime = $1, subject = $2, from_dni = $3, to_dni = $4, message = $5 WHERE id = $6',
    
    //Carreras
    getCareers : 'SELECT * FROM careers',
    getCareerByCode : 'SELECT * FROM careers WHERE code = $1',
    addNewCareer : 'INSERT INTO careers (code, name) VALUES ($1, $2)',
    deleteCareerByCode : 'DELETE FROM careers WHERE code = $1 ',
    updateCareerByCode : 'UPDATE careers SET name = $1 WHERE code = $2',
    
}