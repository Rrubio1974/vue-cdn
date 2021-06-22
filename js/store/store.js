
const store = new Vuex.Store({
    state: {

      productos:[],
      prods:[],

    },
    mutations: {
      
    InsertarProducto(state, payload){
      state.prods = payload
      console.log('prods:', state.prods)
    },

    /* Ejemplo de Esteban: promesa js */
      async obtenerProductos(state) {

        await fetch('https://poyecto-01-default-rtdb.firebaseio.com/juego.json', {
            method: 'GET',
            headers: { 'Content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => (state.productos = data))
            .catch(error => console.log(error))

            console.log('productos obtenidos: ', state.productos)
    },

    async guardarProductos(state, juego) {

      await fetch('https://poyecto-01-default-rtdb.firebaseio.com/juego.json', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(juego)

    })
          .then(response => response.json())
          .then(data => (state.productos = data))
          .then(console.log('productos ingresados: ',state.productos))
          .catch(error => console.log(error))
  },

  borrarElemento(state){
    
    console.log('prods actualizados: ',state.productos)
  },

  borrarProducto(state, id) {
    console.log('id: ',id)

    fetch(`https://poyecto-01-default-rtdb.firebaseio.com/juego/${id}.json`, {
      method: 'DELETE',
      headers:{
        'Content-Type':'Application/json'
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error))

    console.log('producto eliminado: ',state.productos[id].nombre)

  },

  async ActualizarProductos(state, id) {
    console.log('id: ',id)

    await fetch(`https://poyecto-01-default-rtdb.firebaseio.com/juego/${id}.json`, {
      method: 'PATCH',
      headers:{
        'Content-Type':'Application/json'
      },
      body: JSON.stringify(id)
    })
    .then(response => response.json())
    .then(data => (state.productos = data))
    .catch(error => console.log(error))

    console.log('producto actualizado: ',state.productos[id.nombre])

  },

    },
    actions:{

      async borrarProducto({commit}, id) {
        console.log('id: ',id)
    
        await fetch(`https://contenedor-productos-default-rtdb.firebaseio.com/juego/${id}.json`, {
          method: 'DELETE',
          headers:{
            'Content-Type':'Application/json'
          },
          body: JSON.stringify(id)
        })
        .then(response => response.json())
        .then(() => {
          commit('borrarElemento')
        })
        .catch(error => console.log(error))
  
    },
      
      
      
    }
  
})