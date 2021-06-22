
data.component('comp1', {
    template: /*html */
    `
        <div class="row">
        
            <div class="col-12 text-warning">
                <h1 class="text-center ">Videojuegos agregados</h1>
                
            </div>
            <div class="row justify-content-center">
                <div v-for="(item, index) in productos" :key="index" class="card list-group-item-light text-center m-3" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-light">{{item.id}}</li>
                        <li class="list-group-item list-group-item-light"><img :src="item.img" class="img-fluid"></li>
                        <li class="list-group-item list-group-item-light">{{item.nombre}}</li>
                        <li class="list-group-item list-group-item-light">{{item.plataforma}}</li>
                        <li class="list-group-item list-group-item-light">{{item.genero}}</li>
                        <li class="list-group-item list-group-item-light">{{item.estado}}</li>
                        <li class="list-group-item list-group-item-light">{{item.precio}}</li>
                        <li class="list-group-item list-group-item-light">               
                        <button @click="borrarProd(index); obtenerProductos();" class="btn btn-danger btn.lg m-1"><i class="icofont-ui-delete"></i></button>
                        <button @click="ActualizarDatos(index); obtenerProductos();" class="btn btn-success btn.lg m-1"><i class="icofont-ui-reply"></i></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            clave: ''
        }
    },
    computed: {
        ...Vuex.mapState(['productos']),
    },
    // CRUD: revisar funcionamiento en CDN:
    created () {
        this.obtenerProductos();
    },
    methods: {
        ...Vuex.mapMutations(['obtenerProductos', 'borrarProducto', 'ActualizarProductos']),

        borrarProd(id){
            this.borrarProducto(id);
            this.obtenerProductos();
        },

        ActualizarDatos(id){
            this.ActualizarProductos(id);
            this.obtenerProductos();
        }
    },
})