import {Router} from 'express'
import { getUsers } from '../controllers/user.controller.js'

        const router = Router()
        //Consulta alumnos
        router.get('/user', getUsers)

        export default router