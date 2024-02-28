import { Router } from "express";

import { obtenerGrupos, insertarGrupo, actualizarGrupo, eliminarGrupo } from "../../controllers/catalogo/grupos.controller";

const router = Router();

router.get('/grupos/obtenerGrupos', obtenerGrupos);

router.post('/grupos/insertarGrupo', insertarGrupo);

router.put('/grupos/actualizarGrupo', actualizarGrupo);

router.delete('/grupos/eliminarGrupo', eliminarGrupo);

export default router;