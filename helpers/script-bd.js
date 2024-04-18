/**
 
CREATE TABLE usuarios(
	id VARCHAR(100) NOT null primary key,
  	nombre VARCHAR(255) not null,
  	correo VARCHAR(255) UNIQUE,
  	contrasenia VARCHAR(255),
  	rol VARCHAR(100)
);


INSERT INTO usuarios (nombre, correo , contrasenia, rol) VALUES ('eduard villamil','villamileduard0522@gmail.com','12345','Administrador');

CREATE TABLE empresas (
	id_empresa INT AUTO_INCREMENT PRIMARY KEY,
  	nombre VARCHAR(255),
  	telefono INT,
  	correo VARCHAR(255),
  	direccion VARCHAR (255),
  	gerente_responsable text
);


INSERT INTO empresas (nombre,telefono,correo,direccion, gerente_responsable) VALUES ('Avianca', '320156854','avianca@gmail.com','Calle 120 # 53 - 20','Eduard villamil');

create table formatos(
  id_formato INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  descripcion VARCHAR(255)
);


INSERT INTO formatos(nombre) VALUES ('RBS Planning es VF');


CREATE TABLE formularios(
    id_formulario INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
     nombre VARCHAR(255),
     descripcion text,
     formato_id INT,
     FOREIGN KEY (formato_id) REFERENCES formatos(id_formato)
);

INSERT INTO formularios(nombre,descripcion,formato_id) VALUES ('Indicador de exposición(IDE)' , 'Formulario de indicacor de exposición (IDE)',1);

INSERT INTO formularios(nombre,descripcion,formato_id) VALUES ('Perfil de riesgo(ORP)' , 'Formulario de perfil de riesgo(ORP)',1);

INSERT INTO formularios (nombre,descripcion,formato_id) VALUES
('datos especificos del explotador de servicios aéreos','formulario datos especificos del explotador de servicios aéreos',1);

INSERT INTO formularios (nombre,descripcion,formato_id) VALUES
('población tripulantes de vuelo', 'formulario de población tripulantes de vuelo',1);




CREATE TABLE crierios_f_ide(
    id_criterio INT AUTO_INCREMENT PRIMARY KEY,
    descripcion text,
    id_formulario INT,
    FOREIGN KEY (id_formulario) REFERENCES formularios(id_formulario)
);

INSERT INTO crierios_f_ide(descripcion,id_formulario) VALUES ('Cantidad anual de vuelos',1), ('Cantidad de aeronaves',1), ('Cantidad de modelos de aeronaves',1),('Cantidad de destinos',1),('Operación internacional',1),('Edad promedio de la flota',1);



CREATE TABLE calificacion_criterios_ide(
	id_calificacion INT AUTO_INCREMENT PRIMARY KEY,
  	descripcion text,
  	valor INT,
  	id_criterio INT,
  	FOREIGN KEY(id_criterio) REFERENCES crierios_f_ide(id_criterio)
);

INSERT INTO calificacion_criterios_ide(descripcion,valor,id_criterio) VALUES 

('más de 45000', 3, 1),
('4000 a 45000', 2, 1),
('menos de 4000', 1, 1),

('más de 16', 3, 2),
('4 a 16', 2, 2),
('menos de 4', 1, 2),

('más de 4', 3, 3),
('2 a 4', 2, 3),
('1', 1, 3),

('más de 50', 3, 4),
('11 a 50', 2, 4),
('menos de 11', 1, 4),


('si', 2, 5),
('no', 1, 5),
,
('más de 15', 3, 6),
('5 a 12', 15, 6),
('menos de 5', 1, 6),
 */


/*
CREATE TABLE valores_referencia_ide 
(
  valor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   descripcion TEXT NOT NULL , 
   valor_minimo INT NOT NULL , 
   valor_maximo INT NOT NULL ,
   IdE VARCHAR(10) NOT NULL , 
   id_formulario INT NOT NULL ,
   FOREIGN KEY (id_formulario) REFERENCES formularios(id_formulario) 
  );

  INSERT INTO valores_referencia_ide (descripcion,valor_minimo,valor_maximo,IdE,id_formulario) VALUES ('muy bajo impacto en el sistema aeronáutico. Muy baja exposición a los peligros.',6,8,'A',1), ('bajo impacto en el sistema aeronáutico.Baja exposición a los peligros.',8,10,'B',1), ('impacto moderado en el sistema aeronáutico. Moderada exposición a los peligros.',10,12,'C',1), ('alto impacto en el sistema aeronáutico. Alta exposición a los peligros.',12,14,'D',1), ('muy alto impacto en el sistema aeronáutico. Muy alta exposición a los peligros.',14,17,'E',1);



  // Los datos se encuentran en el archivo createDatosBd, es un json con los archivos para hacer un ingreso masivo.

  CREATE TABLE parametros_f_orp(
  id INT AUTO_INCREMENT PRIMARY KEY,
  parametro text,
  peso DECIMAL(4,2),
  id_formulario INT,
  FOREIGN KEY (id_formulario) REFERENCES formularios (id_formulario)
  );

  // Los datos se encuentran en el archivo createDatosBd, es un json con los archivos para hacer un ingreso masivo.
  
  CREATE TABLE nieveles_riesgo_orp(
  id INT AUTO_INCREMENT PRIMARY KEY,
  parametro_id INT,
  descripcion text,
  nivel_riesgo INT,
 FOREIGN KEY (parametro_id) REFERENCES parametros_f_orp (id)

);

  create table valores_referencia_orp(
    id INT AUTO_INCREMENT PRIMARY KEY,
    estado_operador VARCHAR(255),
    resutado_minimo INT,
    resultado_maximo INT,
    nivel_riesgo INT,
    id_formulario INT,
    FOREIGN KEY (id_formulario) REFERENCES formularios(id_formulario)
);

insert into valores_referencia_orp(estado_operador,resutado_minimo,resultado_maximo,nivel_riesgo, id_formulario) VALUES 
('más deseable',190, null,1,2),
('deseable con observaciones',170, 190,2,2),
('nivel de seguridad bajo',141, 169,3,2),
('falta implementacion de medidas',101, 140,4,2),
('debe tomar acciones correctivas',100, null,5,2);


CREATE TABLE criterios_datos_explotador(
    id_criterio  INT AUTO_INCREMENT PRIMARY KEY,
    criterio text,
    formulario_id INT,
    FOREIGN KEY (formulario_id) REFERENCES formularios(id_formulario)
);

INSERT INTO criterios_datos_explotador(criterio,formulario_id) VALUES 
('cantidad de estaciones/bases PPL',3),
('aeronaves ',3),
('cantidad de tripulaciones de vuelo',3),
('cantidad de Examinadores y CHK del explotador (vuelo y simulador)',3),
('cantidad de despachadores',3),
('cantidad de simuladores y otros dispositivos de instrucción de vuelo',3);


CREATE TABLE cantidad_criterios_explotador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  valor_minimo INT,
  valor_maximo INT,
  muestra VARCHAR(50),
  id_criterio INT,
  FOREIGN KEY (id_criterio) REFERENCES criterios_datos_explotador(id_criterio)
);

INSERT INTO cantidad_criterios_explotador (valor_minimo,valor_maximo,muestra,id_criterio) VALUES
(null,4,'1',1),
(5,7,'falso',1),
(8,null,'4',1),
(1,6,'1',2),
(7,12,'2',2),
(13,29,'5',2),
(1,10,'3',3),
(11,20,'5',3),
(21,50,'10',3),
(51,100,'20',3),
(101,500,'25',3),
(501,100,'10%',3),
(1001,1500,'10%',3),
(1,200,'todos',4),
(1,5,'3',5),
(6,10,'5',5),
(11,20,'10',5),
(21,50,'10%',5),
(1,50,'1 por academia',6);




CREATE TABLE criterios_poblacion_tripulantes(
	id_criterio INT auto_increment PRIMARY KEY,
  criterio VARCHAR(255),
  formulario_id INT,
  FOREIGN KEY (formulario_id) REFERENCES formularios(id_formulario)
);

INSERT INTO criterios_poblacion_tripulantes (criterio, formulario_id) VALUES ('programar',4);

CREATE TABLE cantidad_criterios_tripulantes (

 id INT AUTO_INCREMENT PRIMARY KEY,
  valor_minimo INT,
  valor_maximo INT,
  muestra INT,
  id_criterio INT,
  FOREIGN KEY (id_criterio) references criterios_poblacion_tripulantes(id_criterio)
);


INSERT INTO cantidad_criterios_tripulantes(valor_minimo,valor_maximo,muestra,id_criterio) VALUES
(1,10,1,1),
(11,20,4,1),
(21,50,5,1),
(51,100,10,1),
(101,500,30,1),
(501,1000,50,1),
(1001,1500,100,1);

CREATE TABLE asignacion_formato_usuario (
    id_asignacion INT auto_increment PRIMARY KEY,
    id_usuario VARCHAR(100),
    id_formato INT,
    id_empresa INT,
    fecha_asignacion DATETIME DEFAUlT CURRENT_TIMESTAMP ,
    estado_asignacion ENUM ('ABIERTO', 'CERRADO','EN PROCESO') DEFAULT 'ABIERTO',
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_formato) REFERENCES formatos ()
);


CREATE TABLE resultados_usuarios(
    id_resultado INT AUTO_INCREMENT PRIMARY KEY,
    id_asignacion INT,
    id_usuario VARCHAR(100),
    id_formulario INT,
    id_empresa INT,
    resultado_final INT,
    fecha_finalizacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_formulario) REFERENCES formularios(id_formulario),
    FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa),
     FOREIGN KEY (id_asignacion) REFERENCES asignacion_formato_usuario(id_asignacion)
);


CREATE TABLE progreso_respuestas (
	id_progreso INT AUTO_INCREMENT PRIMARY KEY ,
  id_formulario INT,
  id_asignacion INT,
  id_pregunta INT,
  id_usuario VARCHAR(100),
  estado boolean default false,
  FOREIGN KEY (id_formulario) REFERENCES formularios (id_formulario),
	FOREIGN KEY (id_asignacion) REFERENCES asignacion_formato_usuario(id_asignacion),
  FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
)

*/




