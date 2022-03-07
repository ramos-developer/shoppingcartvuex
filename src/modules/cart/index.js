import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'


export default {
    state,
    namespaced: true,
    mutations,
    getters
}