import { Router } from "express";
import { obtenerUsuarios, insertarUsuarios, filtrarUsuariosxCorreo, validarUsuarioxCorreo, actualizarUsuarios } from "../../controllers/usuarios.controller";

const router = Router();

router.get('/obtenerUsuarios', obtenerUsuarios);

router.post('/insertarUsuarios', insertarUsuarios);

router.get('/filtrarUsuarios/:Correo', filtrarUsuariosxCorreo);

router.post('/validarUsuario', validarUsuarioxCorreo);

router.put('/actualizarUsuarios', actualizarUsuarios);

router.delete('/eliminarUsuarios', actualizarUsuarios);

export default router;