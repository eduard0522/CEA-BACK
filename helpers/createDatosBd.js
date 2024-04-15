/* import { getConnection, releaseConnection } from "../config/connectDB.js";
import { calificacionCriteriosIde } from "../services/forms/forms.js" */

 import { createlevel , createParams} from "../services/forms/formORP.js";

/****  llenar masivamente  criterios *****/
/* export const tablaC1 = [
  {
    criterio_id:2,
    descripcion:'4 a 16',
    valor:2
  },
]
export function crearCriterios(data) {
  data.forEach((el) => {
    calificacionCriteriosIde(el);
  });
} */



/*****  LLenar masivamente valores de referencia   *****/

/* export const tablaC1 = [
  {
    valor_total:'Igual o mayor a 6 y menor a 8',
    descripcion:'Muy bajo impacto en el sistema aeronáutico. Muy baja exposición a los peligros.',
    IdE:'A'
  },
  {
    valor_total:'Igual o mayor a 8 y menor a 10',
    descripcion:'Bajo impacto en el sistema aeronáutico. Baja exposición a los peligros.',
    IdE:'B'
  },
  {
    valor_total:'Igual o mayor a 10 y menor a 12',
    descripcion:'Impacto  moderado en el sistema aeronáutico. moderada exposición a los peligros.',
    IdE:'C'
  },
  {
    valor_total:'Igual o mayor a 12 y menor a 14',
    descripcion:'Alto impacto en el sistema aeronáutico. Alta exposición a los peligros.',
    IdE:'D'
  },
  {
    valor_total:'Igual o mayor a 14 y menor o igul a 17',
    descripcion:'Muy alto impacto en el sistema aeronáutico. Muy alta exposición a los peligros.',
    IdE:'E'
  },
]

 */
/* export function crearCriterios(data) {
  data.forEach((el) => {
    insertarMetricaIdE(el);
  });
} */

/*
 async function insertarMetricaIdE(data) {
  try {
    const conn = await getConnection()
    const{valor_total,descripcion,IdE} = data;

    const insertarDatos = await conn.query('INSERT INTO valores_referencia_ide (valor_total,descripcion,IdE) VALUES(?,?,?)',[valor_total,descripcion,IdE])

    if(!insertarDatos){
      console.log(insertarDatos);
      return null;
    }

    releaseConnection(conn);
    return insertarDatos

  } catch (error) {
    console.log(error);
    return null;
  }
}
 */





/*****************************    INSERTAR PARAMETROS DE RIESGO DE LA ORGANIZACIÓN  ********************/

/* export const parametrosRiesgo = [
  {
    parametro:'Percepción operacional en general: cumplimiento operacional: cuantas operaciones de las programadas de han cancelado por razones operacionales internas del explotador o fallas técnicas.',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Estado financiero del explotador de servicios aéreos',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Experiencia del explotador de servicios aéreos (años de operación)',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Cultura de seguridad operacional del explotador de servicios aéreos',
    peso_parametro:1.59,
    formulario_id:1
  },
  {
    parametro:'La experiencia y cualificación de Ejecutivo Responsable (a partir de la fecha de evaluación)',
    peso_parametro:1.59,
    formulario_id:1
  },

  {
    parametro:'Ejecutivo Responsable - Funciones de seguridad operacional',
    peso_parametro:1.59,
    formulario_id:1
  },

  {
    parametro:'Experiencia y cualificación del gerente de seguridad operacional (SM)',
    peso_parametro:1.59,
    formulario_id:1
  },

  {
    parametro:'Auditoria/inspección del explotador de servicios aéreos por la AAC - Calificación de desempeño global',
    peso_parametro:1.39,
    formulario_id:1
  },

  {
    parametro:'Cartera múltiple del personal de gestión de seguridad operacional (SMS)',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Estructura de la responsabilidad de seguridad operacional Ref: Organigrama del SMS)',
    peso_parametro:1.79,
    formulario_id:1
  },

  {
    parametro:'Relación entre el personal de seguridad operacional interna  a todo el personal operacional técnico',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Volumen de rotación combinado del ejecutivo responsable, y gerente de seguridad operacional  durante los últimos 36 meses',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Estado de crecimiento o decrecimiento del explotador de servicios aéreos (grado de cambio en el tamaño y/o alcance de sus operaciones).',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Edad promedio de la flota',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Equipos y herramientas',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Multiplicidad de tipos de aeronaves',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Inspecciones de la UAEAC – Número y Nivel de constataciones  (en los últimos 24 meses).',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Inspecciones de la AAC - Tasa de constataciones de inspecciones del explotador de servicios aéreos (solamente constataciones Nivel 3 y 2, las observaciones están excluidas) para los últimos 24 meses',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Inspecciones de la UAEAC – Tasa de constataciones de inspecciones de estaciones de línea (solo constataciones de Niveles 3 y 2, observaciones excluidas) por los últimos 24 meses',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Programa de identificación de peligros y evaluación de los riesgos.',
    peso_parametro:1.79,
    formulario_id:1
  },
  {
    parametro:'Tasa de incidentes de notificación obligatoria (cada 1000 horas de vuelo (FH)) por los últimos 24 meses',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Tasa de apagado de motores en vuelo (IFSD) por problemas de mantenimiento u operacionales cada 1000 FH',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Tasa promedio de aplicación de la MEL de la flota por cada 1000 FH (en los últimos 24 meses)',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Tasa de aplicación de exenciones otorgadas por la UAEAC',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Persona que preside el comité de seguridad operacional del explotador de servicios aéreos',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Cumplimiento de los objetivos y metas de la seguridad operacional',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Disponibilidad del programa de protección del medio ambiente',
    peso_parametro:0.99,
    formulario_id:1
  },
  {
    parametro:'Programa de análisis de datos de vuelo (FDAP) (Solo para explotadores RAC 121)',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Control de gestión técnica de la flota',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Uso de personal técnico contratado',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:'Efectúa la inspección en tránsito, el piloto, técnico o mecánico de mantenimiento de aeronaves.',
    peso_parametro:1.59,
    formulario_id:1
  },
  {
    parametro:'Sistema de notificación de peligros',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Procedimientos de reportes de incidentes, investigación y medidas correctivas',
    peso_parametro:1.39,
    formulario_id:1
  },
  {
    parametro:'Promoción y participación en el intercambio de información de seguridad operacional de la industria, incluso entre explotadores de servicios aéreos. (Grupo ECSO - PNA COL)',
    peso_parametro:1.19,
    formulario_id:1
  },
  {
    parametro:"Tasa de implementación del SMS en base a la herramienta de evaluación de las listas de verificación (CLs) publicada en la biblioteca técnica de la pag, web de la UAEAC.'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/biblioteca-tecnica/Paginas/Gesti%C3%B3n-de-Seguridad.aspx' ",
    peso_parametro:1.59,
    formulario_id:1
  },
  {
    parametro:'Nivel de eficacia de los procesos del sistema de gestión de la seguridad operacional (SMS) de un explotador de servicios aéreos',
    peso_parametro:30.0,
    formulario_id:1
  },
];


 export async function createParamsData(data) {
  try {
    for (const parametro of data) {
      console.log(parametro)
      await createParams(parametro);  // Espera a que se complete la operación antes de pasar a la siguiente iteración
    }
    return 'ok'
  } catch (error) {
    console.log(error);
  }
}  */






 export const nivelesRiesgo = [
  {
    parametro_id:1,
    nivel_riesgo:1,
    descripcion:'El Explotador ha cumplido menos del 80% de las operaciones programadas'
  },
  {
    parametro_id:1,
    nivel_riesgo:2,
    descripcion:'El explotador de servicios aéreos mantiene un buen promedio de cumplimiento, entre el 80% y 90%'
  },
  {
    parametro_id:1,
    nivel_riesgo:3,
    descripcion:'El explotador de servicios aéreos mantine un cumplimiento deseable mayor al 90%'
  },
  {
    parametro_id:2,
    nivel_riesgo:1,
    descripcion:'El explotador de servicios aéreos enfrenta problemas financieros mayores'
  },
  {
    parametro_id:2,
    nivel_riesgo:2,
    descripcion:'El explotador de servicios aéreos enfrenta algún problema financiero'
  },
  {
    parametro_id:2,
    nivel_riesgo:3,
    descripcion:'El explotador de servicios aéreos no parece enfrentar problemas financieros.'
  },
  {
    parametro_id:3,
    nivel_riesgo:1,
    descripcion:'Más de 5 años'
  },
  {
    parametro_id:3,
    nivel_riesgo:2,
    descripcion:'Entre 5 y 10 años'
  },
  {
    parametro_id:3,
    nivel_riesgo:3,
    descripcion:'Más de 10 años'
  },
  {
    parametro_id:4,
    nivel_riesgo:1,
    descripcion:'Los empleados individuales y el explotador en general manifiestan desinterés o tienen una actitud o comportamiento negativo en relación con asuntos de seguridad operacional y calidad, no se generan reportes.'
  },
  {
    parametro_id:4,
    nivel_riesgo:2,
    descripcion:'Los empleados individuales o el explotador en general no manifiestan ninguna actitud o comportamiento positivo o negativo consistente en materia de seguridad operacional y de calidad Pocos reportes de seguridad operacional'
  },
  {
    parametro_id:4,
    nivel_riesgo:3,
    descripcion:'Los empleados individuales y el explotador manifiestan una actitud y un comportamiento positivo y saludable en relación con asuntos de seguridad operacional y calidad, se evidencia un numero importante de reportes'
  },
  {
    parametro_id:5,
    nivel_riesgo:1,
    descripcion:'Tiene < 3 años de experiencia en aviación Y sin calificación técnica'
  },
  {
    parametro_id:5,
    nivel_riesgo:2,
    descripcion:'Tiene > 3 años de experiencia en aviación O calificación técnica.'
  },
  {
    parametro_id:5,
    nivel_riesgo:3,
    descripcion:'Tiene > 3 años de experiencia en aviación Y la calificación técnica en aviación'
  },
  {
    parametro_id:6,
    nivel_riesgo:1,
    descripcion:'No existen funciones de seguridad operacional en los terminos de referencia del Gerente Responsable'
  },
  {
    parametro_id:6,
    nivel_riesgo:2,
    descripcion:'Los Terminos de referencia  del Gerente Responsable tienen una mención insignificante o indistinta de las funciones de seguridad operacional '
  },
  {
    parametro_id:6,
    nivel_riesgo:3,
    descripcion:'La responsabilidad final en materia de seguridad operacional están claramente establecidas en los términos de referencia del Gerente Responsable'
  },
  {
    parametro_id:7,
    nivel_riesgo:1,
    descripcion:'Tiene menos de 5 años de experiencia en seguridad operacional/calidad de la aviación civil o no posee una calificación técnica'
  },
  {
    parametro_id:7,
    nivel_riesgo:2,
    descripcion:'Tiene más de 5 años de experiencia en seguridad operacional/calidad de la aviación civil y una calificación técnica en aviación'
  },
  {
    parametro_id:7,
    nivel_riesgo:3,
    descripcion:'Auditoria/inspección del explotador de servicios aéreos por la UAEAC - Calificación de desempeño global Últimos 24 meses. '
  },
  {
    parametro_id:8,
    nivel_riesgo:1,
    descripcion:'Todas las actividades de vigilancia presentan hallazgos de que requieren acción inmediata '
  },
  {
    parametro_id:8,
    nivel_riesgo:2,
    descripcion:'En las inspecciones se encuentran al menos 2 hallazgos de acción inmediata '
  },
  {
    parametro_id:8,
    nivel_riesgo:3,
    descripcion:'En las últimas inspecciones no se han evidenciado hallazgos que requieran de acción inmediata. '
  },
  {
    parametro_id:9,
    nivel_riesgo:1,
    descripcion:'El gerente de seguridad operacional (SMS) ejerce otra(s) posición(es) ejecutivas dentro o fuera del explotador de servicios aéreos.'
  },
  {
    parametro_id:9,
    nivel_riesgo:2,
    descripcion:'Los términos de referencia del gerente de seguridad operacional (SMS) incluyen otras funciones no relacionadas directamente con la seguridad operacional. Por ejemplo: información tecnológica (IT), administración, capacitación, etc.'
  },
  {
    parametro_id:9,
    nivel_riesgo:3,
    descripcion:'El gerente de seguridad operacional (SMS) no mantiene ninguna otra posición(es) ejecutiva(s) dentro o fuera del explotador de servicios aéreos y sus términos de referencia no incluyen otras funciones directamente relacionadas con la seguridad operacional'
  },
  {
    parametro_id:10,
    nivel_riesgo:1,
    descripcion:'La función de la gestión de la seguridad operacional /oficina/gerente es responsable o subordinado a algunas funciones operacionales'
  },
  {
    parametro_id:10,
    nivel_riesgo:2,
    descripcion:'La función de la gestión de la seguridad operacional /oficina/gerente es responsable ante el gerente responsable, ante la alta dirección y es independiente de todas las funciones operativas'
  },
  {
    parametro_id:10,
    nivel_riesgo:3,
    descripcion:'La función de gestión de la seguridad operacional / Oficina / Gerente tiene responsabilidad directa y reporta al Director Ejecutivo (CEO)'
  },
  {
    parametro_id:11,
    nivel_riesgo:1,
    descripcion:'1 a más de 20'
  },
  {
    parametro_id:11,
    nivel_riesgo:2,
    descripcion:'1 entre 15 y 20'
  },
  {
    parametro_id:11,
    nivel_riesgo:3,
    descripcion:'1 a menos de 15'
  },
  {
    parametro_id:12,
    nivel_riesgo:1,
    descripcion:'3 o más'
  },
  {
    parametro_id:12,
    nivel_riesgo:2,
    descripcion:'2'
  },
  {
    parametro_id:12,
    nivel_riesgo:3,
    descripcion:'1 o ninguno'
  },
  {
    parametro_id:13,
    nivel_riesgo:1,
    descripcion:'El explotador de servicios aéreos enfrenta problemas mayores relativos al crecimiento/decrecimiento                     '
  },
  {
    parametro_id:13,
    nivel_riesgo:2,
    descripcion:'El explotador de servicios aéreos enfrenta algún problema relativo al crecimiento/decrecimiento                       '
  },
  {
    parametro_id:13,
    nivel_riesgo:3,
    descripcion:'El explotador de servicios aéreos no tiene problemas sustanciales relativos al crecimiento/decrecimiento             '
  },
  {
    parametro_id:14,
    nivel_riesgo:1,
    descripcion:'> 12 años'
  },
  {
    parametro_id:14,
    nivel_riesgo:2,
    descripcion:'8 a < 12 años'
  },
  {
    parametro_id:14,
    nivel_riesgo:3,
    descripcion:'< 8 años'
  },
  {
    parametro_id:15,
    nivel_riesgo:1,
    descripcion:'Analógico'
  },
  {
    parametro_id:15,
    nivel_riesgo:2,
    descripcion:'Analógico/digital'
  },
  {
    parametro_id:15,
    nivel_riesgo:3,
    descripcion:'Digital'
  },
  {
    parametro_id:16,
    nivel_riesgo:1,
    descripcion:'Más de 4 tipos de aeronaves'
  },
  {
    parametro_id:16,
    nivel_riesgo:2,
    descripcion:'3 a 4 tipos de aeronaves'
  },
  {
    parametro_id:16,
    nivel_riesgo:3,
    descripcion:'Menos de 3 tipos de aeronaves'
  },
  {
    parametro_id:17,
    nivel_riesgo:1,
    descripcion:'Cualquier constatación Nivel 3 o más de 3 constataciones Nivel 2 para el período evaluado'
  },
  {
    parametro_id:17,
    nivel_riesgo:2,
    descripcion:'No más de 3 constataciones Nivel 2 para el período evaluado'
  },
  {
    parametro_id:17,
    nivel_riesgo:3,
    descripcion:'Ninguna constatación Nivel 3 o Nivel 2 para el período evaluado'
  },
  {
    parametro_id:18,
    nivel_riesgo:1,
    descripcion:'Varias constataciones de gravedad por inspección por aeronave'
  },
  {
    parametro_id:18,
    nivel_riesgo:2,
    descripcion:'Más de 1 constatación por inspección por aeronave'
  },
  {
    parametro_id:18,
    nivel_riesgo:3,
    descripcion:'Menos de 1 constatación por inspección por aeronave'
  },
  {
    parametro_id:19,
    nivel_riesgo:1,
    descripcion:'Constataciones que requieren acción inmediata por inspección de estación de línea. (bases)'
  },
  {
    parametro_id:19,
    nivel_riesgo:2,
    descripcion:'Más de 1 constataciones por inspección de estación de línea (bases)'
  },
  {
    parametro_id:19,
    nivel_riesgo:3,
    descripcion:'Menos de 1 constataciones por inspección de estación de línea (bases)'
  },
  {
    parametro_id:20,
    nivel_riesgo:1,
    descripcion:'No tiene ningún programa activo y funcional de educación o socialización respecto a la identificación de peligros y administración del riesgooperacional.'
  },
  {
    parametro_id:20,
    nivel_riesgo:2,
    descripcion:'Tiene un programa respecto ala identificación de peligros y administración del riesgo. Ha completado o revisado entre 1 a 3 proyectos de evaluación de riesgos (por cada 100 empleados operativos) en los últimos 12 meses'
  },
  {
    parametro_id:20,
    nivel_riesgo:3,
    descripcion:'Tiene un programa de identificación de peligros y administración del riesgo, en su lugar para todas las principales áreas operativas, que contempla escenarios reales de la operación.'
  },
  {
    parametro_id:21,
    nivel_riesgo:1,
    descripcion:'Mayor de 0.4 incidentes por 1000 FH'
  },
  {
    parametro_id:21,
    nivel_riesgo:2,
    descripcion:'Entre 0.2 a 0.4 incidentes por 1000 FH'
  },
  {
    parametro_id:21,
    nivel_riesgo:3,
    descripcion:'Menos de 0.2 incidentes por 1000 FH'
  },
  {
    parametro_id:21,
    nivel_riesgo:3,
    descripcion:'Menos de 0.2 incidentes por 1000 FH'
  },
  {
    parametro_id:22,
    nivel_riesgo:1,
    descripcion:'Más de 0.08 incidentes por 1000 FH'
  },
  {
    parametro_id:22,
    nivel_riesgo:2,
    descripcion:'Ente 0.04 a 0.08 incidentes por 1000 FH'
  },
  {
    parametro_id:22,
    nivel_riesgo:3,
    descripcion:'Menos de 0.04 incidentes por 1000 FH'
  },
  {
    parametro_id:23,
    nivel_riesgo:1,
    descripcion:'Más de 30 aplicaciones de la MEL cada 1000 FH'
  },
  {
    parametro_id:23,
    nivel_riesgo:2,
    descripcion:'Entre 10 y 30 aplicaciones de la MEL cada 1000 FH'
  },
  {
    parametro_id:23,
    nivel_riesgo:3,
    descripcion:'Menos de 10  aplicaciones de la MEL cada 1000 FH'
  },
  {
    parametro_id:24,
    nivel_riesgo:1,
    descripcion:'Más de 1 exención por año'
  },
  {
    parametro_id:24,
    nivel_riesgo:2,
    descripcion:'Entre 0.5 y 1 exención por año'
  },
  {
    parametro_id:24,
    nivel_riesgo:3,
    descripcion:'Menos de 0.5 de exención por año'
  },
  {
    parametro_id:25,
    nivel_riesgo:1,
    descripcion:'El comité del SMS no existe o lo preside una gerencia subalterna'
  },
  {
    parametro_id:25,
    nivel_riesgo:2,
    descripcion:'El comité del SMS es presidida por el gerente responsable adjunto o gerente de SMS / QMS con responsabilidad directa ante el ejecutivo responsable del SMS'
  },
  {
    parametro_id:25,
    nivel_riesgo:3,
    descripcion:'El comité del SMS de seguridad operacional es presidida por el ejecutivo responsable del SMS'
  },
  {
    parametro_id:26,
    nivel_riesgo:1,
    descripcion:'En el periodo de los doce (12) meses anteriores a la vigilancia algún SPI ha superado un punto por encima del alerta 3 SD (desviación estándar) o dos puntos consecutivos han superado la alerta 2 SD o 3 puntos consecutivos han superado la alerta 1 SD'
  },
  {
    parametro_id:26,
    nivel_riesgo:2,
    descripcion:'En el periodo de los doce (12) meses anteriores a la vigilancia algún SPI ha superado un punto por encima de la alerta 1 SD'
  },
  {
    parametro_id:26,
    nivel_riesgo:3,
    descripcion:'En el periodo de los doce (12) meses anteriores a la vigilancia ningún SPI ha superado los niveles de alerta'
  },
  {
    parametro_id:27,
    nivel_riesgo:1,
    descripcion:'Inexistente'
  },
  {
    parametro_id:27,
    nivel_riesgo:2,
    descripcion:'Participación aislada o programa aislado de protección ambiental en aviación'
  },
  {
    parametro_id:27,
    nivel_riesgo:3,
    descripcion:'Programa de rutina y participación regular en el programa de protección ambiental de la aviación'
  },
  {
    parametro_id:28,
    nivel_riesgo:1,
    descripcion:'No ha implementado el programa'
  },
  {
    parametro_id:28,
    nivel_riesgo:2,
    descripcion:'El programa ha sido implementado pero no se está controlando las medidas de mitigación'
  },
  {
    parametro_id:28,
    nivel_riesgo:3,
    descripcion:'El programa ha sido implementado apropiadamente'
  },
  {
    parametro_id:29,
    nivel_riesgo:1,
    descripcion:'Contrata más de 10 veces por mes otro explotador de servicios aéreos'
  },
  {
    parametro_id:29,
    nivel_riesgo:2,
    descripcion:'Contrato parcial a una organización externa'
  },
  {
    parametro_id:29,
    nivel_riesgo:3,
    descripcion:'Gestión interna del explotador de servicios aéreos'
  },
  {
    parametro_id:30,
    nivel_riesgo:1,
    descripcion:'Más del 15 % de personal contratado (de otra organización) para las funciones de ingeniería y/o funciones técnicas'
  },
  {
    parametro_id:30,
    nivel_riesgo:2,
    descripcion:'5 a 15 % de personal contratado (de otra organización) para las funciones de  ingeniería y/o funciones técnicas'
  },
  {
    parametro_id:30,
    nivel_riesgo:3,
    descripcion:'< 5 % de personal contratado (de otra organización) para las funciones de  ingeniería y/o funciones técnicas'
  },
  {
    parametro_id:31,
    nivel_riesgo:1,
    descripcion:'El piloto certifica la inspección de tránsito'
  },
  {
    parametro_id:31,
    nivel_riesgo:2,
    descripcion:'Un técnico (con habilitación limitada certifica la inspección de tránsito'
  },
  {
    parametro_id:31,
    nivel_riesgo:3,
    descripcion:'Sólo una persona habilitada certifica la inspección de tránsito.'
  },
  {
    parametro_id:32,
    nivel_riesgo:1,
    descripcion:'Ninguno implementado'
  },
  {
    parametro_id:32,
    nivel_riesgo:2,
    descripcion:'Sistema de notificación voluntaria de peligros implementado'
  },
  {
    parametro_id:32,
    nivel_riesgo:3,
    descripcion:'Sistema de notificación voluntaria de peligros implementado. Además de un procedimiento de identificación de peligros junto con el proceso de investigación de incidentes.'
  },
  {
    parametro_id:33,
    nivel_riesgo:1,
    descripcion:'No existen procedimientos documentados para el reporte e investigación de incidentes y la implementación de medidas correctivas'
  },
  {
    parametro_id:33,
    nivel_riesgo:2,
    descripcion:'Existe un procedimiento documentado para el reporte e investigación de incidentes y la implementación de medidas correctivas'
  },
  {
    parametro_id:33,
    nivel_riesgo:3,
    descripcion:'Existe un procedimiento documentado para el reporte e investigación de incidentes y la implementación de medidas correctivas aceptado por la UAEAC'
  },
  {
    parametro_id:34,
    nivel_riesgo:1,
    descripcion:'Ninguno en absoluto'
  },
  {
    parametro_id:34,
    nivel_riesgo:2,
    descripcion:'Participación limitada'
  },
  {
    parametro_id:34,
    nivel_riesgo:3,
    descripcion:'Positivamente involucrados en la promoción y participación'
  },
  {
    parametro_id:35,
    nivel_riesgo:1,
    descripcion:'Menos de 70% En estado operacional (O)'
  },
  {
    parametro_id:35,
    nivel_riesgo:2,
    descripcion:'> 70% ≤ 90%'
  },
  {
    parametro_id:35,
    nivel_riesgo:3,
    descripcion:'≤ 90%  En estado operacional (O)'
  },
  {
    parametro_id:36,
    nivel_riesgo:1,
    descripcion:'El SMS no arroja acciones correctivas respecto a los eventos presentados en los últimos 24 meses'
  },
  {
    parametro_id:36,
    nivel_riesgo:2,
    descripcion:'El SMS solo ha gestionado el 50% de los eventos presentados en los ultimos 24 meses'
  },
  {
    parametro_id:36,
    nivel_riesgo:3,
    descripcion:'El SMS ha gestionado casi la totalidad de los eventos que se han presentado en los Ultimos 24 Meses'
  },
]



export async function createLevels(data) {
  try {
    for (const level of data) {
      await createlevel(level); // Espera a que se complete la operación antes de pasar a la siguiente iteración
    }
    return 'ok'
  } catch (error) {
    console.log(error);
  }
 
} 
