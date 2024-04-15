/**
 
CREATE TABLE usuarios(
	id VARCHAR(100) NOT null primary key,
  	nombre VARCHAR(255) not null,
  	correo VARCHAR(255) UNIQUE,
  	contrasenia VARCHAR(255),
  	rol VARCHAR(100)
);


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


  
  CREATE TABLE parametros_f_orp(
  id INT AUTO_INCREMENT PRIMARY KEY,
  parametro text,
  peso DECIMAL(4,2),
  id_formulario INT,
  FOREIGN KEY (id_formulario) REFERENCES formularios (id_formulario)
  );

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

*/


