<h1> SGB-screen-tour </h1>

<h3> Propósito </h3>

Esta pantalla permite visualizar imágenes con posiblemente algún texto y/o título. Para cambiar de imágen se desliza hacia la derecha o izquierda para avanzar o retroceder respectivamente.  

<h3> Datos esperados </h3>

Se espera recibir una lista de ítems donde cada ítem debe tener los siguientes campos 

<h3> Datos obligatorios </h3>

- **image**: enlace a una imágen correspondiente al ítem

<h3> Datos opcionales</h3>

- **desc**: alguna descripción del ítem (opcional)

<h3> Ejemplo JSON </h3>

![Alt Text](https://s3.amazonaws.com/megazord-framework/json+screenshots/json-tour.png)

<h3> Parámetros de configuración </h3>

- **previousIcon**: Icono para retroceder en el tour, se debe indicar el nombre del icono a utilizar en Ionic
- **nextIcon**: Icono para avanzar en el tour, se debe indicar el nombre del icono a utilizar en Ionic.  Para que se muestren los íconos, se deben indicar tanto *nextIcon* como *previousIcon*.
- **showProgress**: Valor booleano que indica si se quiere mostrar el elemento que indica el progreso en el tour

<h3> Diseño </h3>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-tour.png)

