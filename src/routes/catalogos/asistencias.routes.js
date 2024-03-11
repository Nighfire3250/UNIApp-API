import { Router } from "express";

import { obtenerAsistencias, insertarAsistencia, actualizarAsistencia, eliminarAsistencia } from "../../Controllers/Catalogo/Asistencias.Controller";

const router = Router();

router.get('/asistencias/obtenerAsistencias', obtenerAsistencias);

router.post('/asistencias/insertarAsistencia', insertarAsistencia);

router.put('/asistencias/actualizarAsistencia', actualizarAsistencia);

router.delete('/asistencias/eliminarAsistencia', eliminarAsistencia);

export default router;