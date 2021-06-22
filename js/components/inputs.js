
data.component('productos', {

    template: /*html*/
    `
    <div class="container-fluid">
        <div class="row bg-warning rounded-3 p-3" style="border: 2px solid white;">
            <div class="col-12">
                <p class="h2 text-dark">Agregar Videojuegos:</p>
            </div>
            
            <div class="row">
                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text" >Nombre: </span>
                        <input type="text" class="form-control" placeholder="Agregar Nombre" v-model="nombre">
                    </div>
                </div>

                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text" >Plataforma: </span>
                        <input type="text" class="form-control" placeholder="Agregar Plataforma" v-model="plataforma" >
                    </div>
                </div>

                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text" >Genero: </span>
                        <input type="text" class="form-control" placeholder="Agregar Género" v-model="genero" >
                    </div>
                </div>

                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text" >Precio (CLP): </span>
                        <input type="text" class="form-control" placeholder="Agregar Precio" v-model="precio" >
                    </div>
                </div>

                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text" >Imagen: </span>
                        <input type="text" class="form-control" placeholder="Agregar imagen de caratula" v-model="img">
                    </div>
                </div>

                <div class="col-6">
                    <div class="input-group mb-3">
                        <span class="input-group-text" >Estado: </span>
                        <input type="text" class="form-control" placeholder="Agregar Estado" v-model="estado" >
                    </div>
                </div>
            </div>

                <div class="mb-3 col-6 text-center d-grid gap-2">
                    <button @click="InsertarVariables" class="btn btn-outline-dark btn-group-lg">Insertar Producto</button>
                </div>

                <div class="mb-3 col-6 text-center d-grid gap-2">
                    <button @click="Borrar" class="btn btn-outline-danger btn-group-lg">Borrar Datos Ingresados</button>
                </div>
        </div>

        <comp1/>

        <div class="row bg-warning rounded-3 p-3 mt-3">
            <div class="col-12">
                <p class="fs-4 text-dark text-center">Vista Previa del Producto a Procesar:</p>
            </div>
            <table class="table text-dark lead">
                <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Plataforma</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><!--
                        <th scope="row">1</th>
                        <td>{{prod.id}}</td>
                        <td>{{prod.nombre}}</td>
                        <td>{{prod.plataforma}}</td>
                        <td>{{prod.genero}}</td>
                        <td>{{prod.estado}}</td>
                        <td>{{prod.precio}}</td>
                        <td><img :src="prod.img" class="img-fluid"></td>
                        -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    `,
    data() {
        return {
            id: '',
            nombre: '',
            plataforma: '',
            genero: '',
            precio: '',
            img: '',
            estado: '',
        }
    },
    computed: {

        ...Vuex.mapState(['prods', 'productos']),
        
    },
    methods: {

        ...Vuex.mapMutations(['guardarProductos', 'obtenerProductos']),

        // Guardar objeto en objeto prod:
        InsertarProds(){

            // creamos 1 objeto para ser insertado en el Array principal:
            let prods = {

                'id': + new Date(),
                'nombre': this.nombre,
                'plataforma': this.plataforma,
                'genero': this.genero,
                'precio': this.precio,
                'img': this.img,
                'estado': this.estado

            }

            this.InsertarProductos(prods);

        },

        // Guardar Objeto en Array productos:
        InsertarVariables(){

            // creamos 1 objeto para ser insertado en el Array principal:
            let datos = {

                'id': + new Date(),
                'nombre': this.nombre,
                'plataforma': this.plataforma,
                'genero': this.genero,
                'precio': this.precio,
                'img': this.img,
                'estado': this.estado

            }

            this.guardarProductos(datos);

            // la diferencia del parentesis de la mutacion del store, es toda la diferencia `para que el
            // componente hijo carge la pagina.
            this.obtenerProductos();

        },

        Borrar(){
            this.id = '',
            this.nombre = '',
            this.plataforma = '',
            this.img = '',
            this.precio = '',
            this.genero = '',
            this.estado = ''
        },
        
    },
})