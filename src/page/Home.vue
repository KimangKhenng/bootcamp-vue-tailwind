<template>
    <Hero />
    <Starting />
    <Product />
</template>
<script>

import Hero from '@/components/Hero.vue'
import Starting from '@/components/Starting.vue'
import Product from '@/components/Product.vue'

export default {
    components: {
        Hero,
        Starting,
        Product,
    }
}
</script>