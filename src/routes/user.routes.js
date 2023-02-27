import {Router} from 'express'
import { getUser } from '../controllers/user.controller.js'

        const router = Router()
        //Consulta alumnos
        router.get('/user', getUser)

        export default router