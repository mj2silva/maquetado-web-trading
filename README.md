# Numeral - Templates

Hola! Este repositorio plantilla para maquetación de nuestras aplicaciones.

Este repositorio está preparado para comenzar a desarrollar con HTML, SASS y JS. Además, puedes usar este repositorio
para generar pequeños proyectos que solo usen Vanilla JS. Esto te permitirá tener un código simple pero optimizado y con
compatibilidad con distintos navegadores.

## Pre-requisitos

1. Node v 12.13.0 o superior
## Uso

```bash
npm install
```

```bash
npm run dev
```

El servidor utiliza por defecto el puerto 3000

Si el navegador no se abre automáticamente, ingresa manualmente en tu navegador a `localhost:3000`

Una vez el servidor esté en ejecución puedes hacer cambios en los archivos y estos se verán reflejados en el navegador. Sin embargo,
antes de continuar, debes tener en cuenta lo siguiente:

1. El código a modificar se encuentra dentro de la carpeta src. No modifiques los otros archivos (a menos que sepas lo que haces).
2. En la carpeta src se encuentran 3 subcarpetas: assets, js y scss.
3. La carpeta assets contiene las imágenes e íconos a utilizar. Debido a que no usamos un sistema de templates, te recomendamos que
optimices previamente cada imagen antes de subirla.
4. En la carpeta scss se encuentra el archivo ``global.scss``. Este archivo contiene los estilos globales compartidos por toda la
aplicación y es llamado por defecto en todos los archivos html. Por lo tanto, no tienes que agregarlos manualmente.
5. En la carpeta js se encuentran los archivos javascript del proyecto. Notar que a cada archivo html le corresponde uno y solo un arhivo .js del mismo nombre.
6. Todos los archivos .html deben tener un archivo .js relacionado, aunque este esté vacío, esto debido a que al realizar el "build", webpack busca los archivos .js y luego los .html con el mismo nombre.
7. Los archivos que estén dentro de subcarpetas de la carpeta js se considerarán módulos, y pueden ser llamados dentro de los archivos principales que se encuentran en la raíz de la carpeta js. Si no son llamados dentro de ningún archivo principal, no serán considerados dentro del bundle de producción.
8. Finalmente, todos los archivos HTML se encuentran en la raíz de src. No es necesario llamar a ningún archivo .js, .scss o .css dentro de ellos, son añadidos de manera automática.

## Modo producción

Si tu objetivo es construir una web simple utilizando Vanilla JS. Puede usar el bundle generado con el comando

```bash
npm run build
```

Este comando generará un dist folder en el que se encuentran todos los archivos necesarios para llevar tu código optimizado
a cualquier hosting en la nube.

Además, si quieres compartir tu build en GitHub pages puedes usar el comando npm run build:gh-pages.

Recuerda que este build será subido a tu repositorio, por lo que te recomendamos crear la rama gh-pages como tu rama de producción.

Cuando estés en la rama ejecuta


```bash
npm run build:gh-pages
```

Luego haz un commit y sube tus cambios a la nube. Esto generará una carpeta docs donde se encuentran los archivos minificados y los que
son servidos por gh-pages.

Para continuar desarrollando regresa a la rama main y cuando hayas terminado mezcla tus cambios con la rama gh-pages y vuelve a ejecutar
el comando anterior.

Siéntente libre de dejar tus comentarios o sugerencias. También puedes abrir un issue o realizar tu propia contribución con un pull request.

## Contribución

Este repositorio es mantenido por el equipo de @AcademiaNumeral.
