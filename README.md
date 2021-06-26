# Node API

El objetivo de este proyecto es crear un API de una lista de tareas.

En este archivo se describen todas las actividades a realizar.

## API

El API debe constar de 5 endpoints que se describen a continuación:

* POST /todo - Esta ruta debe generar una nueva tarea
* GET /todo - Esta ruta regresar todas las tareas
* PUT /todo/:id - Esta ruta debe buscar y actualizar todas las propiedades de la tarea que se recibio como parametro
* GET /todo/:id - Esta ruta debe regresar la tarea con el identificador recibido
* DELETE /todo/:id - Esta ruta debe eliminar la tarea con el identificador recibido
* PATCH /todo/:id - PUNTOS EXTRASS - Esta ruta debe buscar y actualizar solo las propiedades enviadas de la tarea 

## Almacenamiento

Para almacenar la información pueden utilizar un arreglo o objeto definido al inicio del archivo y 
ese mismo ir concatenando o modificando la información

Otra alternativa es utilizar [Sequelize](https://sequelize.org/) ó [Mongoose](https://mongoosejs.com/) como ORMS
para una base de datos local.

## Paqueteria

Utilizar [dotenv](https://github.com/motdotla/dotenv) para las variables de ambiente
