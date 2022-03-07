<template>
    <div>
        <b-card
            :title="product.name"
            :img-src="product.picture"
            :img-alt="product.name"
            style="max-width: 30rem;"
            class="mb-2"
        >
            <b-button
                block
                variant="warning"
                @click="$emit('addToCart', product)"
            >
            Añadir al Carrito
            </b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>