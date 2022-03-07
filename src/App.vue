<template>
  <div id="app" class="mt-5">
    <shop-layout>
      <template slot="product-list">
        <product-list></product-list>
      </template>
      <template slot="cart">
        <cart></cart>
      </template>
    </shop-layout>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ShopLayout from '@/components/ShopLayout'
import Cart from '@/components/Cart'
export default {
  name: 'App',
  components: {
    ShopLayout,
    ProductList,
    Cart
  }
}
</script>

<style>

</style>
