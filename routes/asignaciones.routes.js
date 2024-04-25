import { Router } from "express";
import { getAsignacionesController } from "../controllers/asignaciones";

export const asignacionesRouter = Router();

// ENTRA A LA VISTA DE ASIGNACIONES 
asignacionesRouter.get('/asignaciones', getAsignacionesController}}
})
 
