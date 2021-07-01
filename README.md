# Node API

El objetivo de este proyecto es crear un API de una lista de tareas.

En este archivo se describen todas las actividades a realizar.

## ESTRUCTURA

```
src
│__ index.js
└───models
│   │___ todo.model.js
└───controllers
    │___ todo.controller.js
```

## RUTAS

El API debe constar de 5 endpoints que se describen a continuación:

* POST /todo - Esta ruta debe generar una nueva tarea
* GET /todo - Esta ruta regresar todas las tareas
  * PUNTOS EXTRAS - Permitir filtrar por is_done
* PUT /todo/:id - Esta ruta debe buscar y actualizar todas las propiedades de la tarea que se recibió como parámetro
* GET /todo/:id - Esta ruta debe regresar la tarea con el identificador recibido
* DELETE /todo/:id - Esta ruta debe eliminar la tarea con el identificador recibido
* PATCH /todo/:id - PUNTOS EXTRAS - Esta ruta debe buscar y actualizar solo las propiedades enviadas de la tarea 

## CONTROLADORES

Para este ejercicio se estará trabajando con un controlador para manejar toda la lógica de las rutas. 
El nombre del archivo debe ser `todo.controller.js`

Nombrar los métodos de cada acción de esta manera:

* getAll
* create
* get
* put
* delete

## DATOS

Se debe crear una clase para las tareas y se debe llamar `todo.model.js`. 
La clase debe constar de 4 propiedades. `id`,`description`,`is_done`,`due_date`.

Para almacenar la información utilizaremos un arreglo. Esto nos permitirá guardar información sin contar con un ORM

Otra alternativa es utilizar [Sequelize](https://sequelize.org/) ó [Mongoose](https://mongoosejs.com/) como ORM
para una base de datos local.

## LIBRERÍAS

* [dotenv](https://github.com/motdotla/dotenv) para las variables de ambiente
* [uuid](https://www.npmjs.com/package/uuid) para generar identificadores únicos
* [jest](https://jestjs.io/) para pruebas
