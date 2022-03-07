<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <!-- cell es el alcance de los datos (su fila)-->
            <template #cell(actions)="cell">
                <b-button
                    size="sm"
                    variant="danger"
                    @click.stop="removeProductFromCart(cell.item)" 
                >    
                <!-- cell.item pasa el item de esa fila stop para evitar la propagacion-->
                    Eliminar
                </b-button>
            </template>
        </b-table>
        <b-alert show variant="success" class="text-center">
            Coste Total: {{totalCost}}
        </b-alert>
    </div>
    <b-alert v-else show variant="info">No hay productos en su carrito</b-alert>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            fields: ['name', 'qty', 'price', 'actions'] // la columna actions para añadir acciones, en este caso un botón
        }
    },
    computed: {
        ...mapState('cart', ['cart']),  // nombre del módulo y nombre del estado
        ...mapGetters('cart', ['totalCost'])
    },
    methods: {
        ...mapMutations('cart', ['removeProductFromCart'])
    },
}
</script>