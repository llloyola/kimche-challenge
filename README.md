# Desafío para Software Engineers

Nombre postulante: Luis Alberto Loyola Alessandrini

Link a la app en producción: http://deploy-kimche-challenge.s3-website-us-east-1.amazonaws.com/

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)

# Solución al desafío

## Decisiones de diseño

## Respuesta a pregunta abierta
> La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc.

Ante este escenario, evaluaría las siguientes dos opciones:
1) Realizar una optimización a la consulta de escritura a la DB. Por ejemplo, la consulta podría estar ejecutándose varias veces por separado:
    ```sql
    INSERT INTO `Asistencia` VALUES (student_1_id, curr_date);
    INSERT INTO `Asistencia` VALUES (student_2_id, curr_date);
    ...
    INSERT INTO `Asistencia` VALUES (student_n_id, curr_date);
    ``` 
    En este caso, se podría optar por realizar la siguiente consulta, con un mismo resultado, pero más rápida si se desean escribir varios registros en la BD:
    ```sql
    INSERT INTO `Asistencia` VALUES (student_1_id, curr_date),(student_2_id, curr_date),...,(student_n_id, curr_date);
    ``` 
    De la misma manera, se podrían analizar y hacer un refactor a otros aspectos de cómo está escrita la query, mejorando el tiempo de respuesta y la experiencia de usuario. Otros aspectos a considerar podrían ser
    - Verificar si se está usando una primary key en la tabla
    - Remodelar el esquema de la base de datos, un mal diseño puede conllevar mayor tiempo de ejecución.

2) Optar por otro RDBMS (Relational Database Managemente System), pues MYSQL no tiene un buen desempeño en comparación a otras alternativas (por ejemplo, PSQL) a la hora de manejar grandes cantidades de registros y operaciones de escritura.

Finalmente, lo mejor que se podría hacer es llevar a cabo un análisis de si la primera opción es viable (saber si realmente vale la pena la cantidad de tiempo que se va a optimizar) y si no lo es, ya habría que cambiar de RDBMS, lo cual suena razonable considerando el tamaño de la tabla y que seguirá aumentando en número de registros.