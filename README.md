El proyecto travel web es una web de reserva de viajes.

Esta parte del proyecto consiste en el desarrollo del frontend de la web con vue 2. El front hace las llamadas a una API desarrollada con .net.

Por necesidades de la web tenemos tres entidades:
- Usuarios: con los atributos id, nombre, usuario, contraseña, rol y fecha de creación.
- Viajes: con los atributos id, destino, fecha de salida, fecha de llegada, precio, puestos disponibles y booleano está lleno.
- Reservas: con los atributos id, id de usuario, id de viaje, fecha de la reserva y precio final.

La web tiene varias vistas, usando vue-router para navegar entre ellas. Todas las vistas tienen el componente header y componente footer, común para toda la app. Toda la web ha sido maquetada con vuetify.
- Home: es la landing page de la web. Es una zona más visual con enlace a las demás vistas.
- Registrar usuario: vista para registrar un nuevo usuario. Contiene formulario que utiliza vue-validate para las validaciones de datos.
- Loguear usuario: vista para que un usuario pueda loguearse.
- Log out: vista para que un usuario se desloguee.
- Listado de viajes: se listan todos los viajes de la web en formato tarjetas. Hay un buscador que permite buscar un viaje por destino.
- Detalle de viaje: de muestra el detalle de un viaje concreto. Si estás registrado y el viaje está disponible es posible reservar el viaje.
- Área personal: área donde el usuario puede encontrar sus reservas de viaje pudiendo cancelarlas y sus datos de usuario, pudiendo editarlos o eliminar su cuenta.
- Área de administrador: área donde los usuarios con rol administrador pueden listar todos los usuarios, viajes y reservas que hay en la web. Ha quedado pendiente de desarrollar que puedan añadir y editar información desde esta vista.

Para la gestión de los datos he utilizado Vuex, obtiendo datos iniciales, almacenándolos y modificándolos mediante mutaciones.