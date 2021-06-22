// Vue Router 4:

// 1. Define route components.
// These can be imported from other files
const Home = { template: /*html*/
    
  `<div class="col-12 text-center mt-3">
    <p class="fs-3 fw-bold bg-warning text-dark rounded-3 p-3">JUEGOS DIGITALES PS3-PS4 XBOX ONE NINTENDO</p>
  </div>
  <productos />
  <hr>
  `

}
const Productos = { template:
    /*html*/
  `
    <div class="col-12 text-center text-danger">
      <p class="fs-3 fw-bold">Pagina 2</p>
    </div>
    <div class="col-12">
      <comp1></comp1>
    </div>

  `

}

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/productos', component: Productos },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`

})

// ----------------------------------------------------------------- //
// Vuex: aca encima de Vue
// Vue Next:
const data = Vue.createApp({ 
});

// abajo de la constante data creadora de Vue, llamar la store:
data.use(store)

data.use(router)