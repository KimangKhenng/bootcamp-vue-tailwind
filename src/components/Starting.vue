<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 py-12 px-8">
        <ProductCard v-for="(item, index) in products" :key="index" :item="item"></ProductCard>
    </div>
</template>

<script>
import plans from "@/product.js"
import ProductCard from './cards/ProductCard.vue'
export default {
    components: { ProductCard },
    mounted() {
        console.log(this.products)
    },
    data() {
        return {
            products: plans
        }
    }
}
</script>