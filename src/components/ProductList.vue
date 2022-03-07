<template>
    <div>
        <div v-if="products.length">
            <paginate
                name="products"
                :list="products"
                :per="perPage"
            >
                <b-card-group columns>
                    <product-item
                        v-for="product in paginated('products')"
                        :product="product"
                        :key="product.id"
                        @addToCart="addProductToCart"
                    >
                    </product-item>
                </b-card-group>
            </paginate>
            <paginate-links
                for="products"
                :classes="{
                    'ul': 'pagination',
                    'li': 'page-item',
                    'li > a': 'page-link'
                }"
            ></paginate-links>
        </div>
        <b-alert v-else show variant="info">No hay Productos que mostrar</b-alert>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapState } from 'vuex'
    import ProductItem from './ProductItem'
    export default {
        components: {
            ProductItem
        },
        mounted () {
            this.fetchProducts()
        },
        data() {
            return {
                paginate: ['products'], // Paginate es una clave requerida para la paginación y le estamos dando un alias
                perPage: 3 // número por página
            }
        },
        computed: {
            ...mapState('products', ['products']) //primero el modulo y luego la clave del estado
        },
        methods: {
            ...mapActions('products', ['fetchProducts']),  // añadiendo mapActions podemos acceder a el modulo products a sus actions 
            ...mapMutations('cart', ['addProduct']),
            addProductToCart (product) {
                this.addProduct(product)  // Accionamos el método de la mutación
            }
        },
    }
</script>

<style lang="stylus">
    
</style>