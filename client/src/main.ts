import { createApp } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import BootstrapVueNext from 'bootstrap-vue-next'

// icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

import App from './App.vue'

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql',
  })
  
  // Cache implementation
  const cache = new InMemoryCache()
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })

  const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
  })

const app = createApp(App)

// icons
app.component('font-awesome-icon', FontAwesomeIcon)
/* import specific icons */
/* add icons to the library */
library.add(faCog)

app.use(BootstrapVueNext)
app.use(apolloProvider)
app.mount('#app')
