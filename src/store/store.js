import createStore from 'unistore'
import devtools from 'unistore/devtools'

import initialStore from './initial-store.js'

let store = null

if (module.hot || process.env.NODE_ENV !== 'production') {
  store = devtools(createStore(initialStore))
} else {
  store = createStore(initialStore)
}

let actions = store => ({
  toggleSidebar (state) {
    return { mobileSidebarState: !state.mobileSidebarState }
  }
})

export {
  store,
  actions
}
