<template>
    <div class="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">{{ getProduct.name }}</h2>

            <p class="text-3xl  font-bold text-gray-900 sm:text-2xl">{{ getProduct.features }}</p>

            <p class="mt-4 text-gray-500 sm:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                provident impedit esse recusandae facere libero harum sequi.
            </p>
        </div>

        <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="(item, index) in getProduct.features" :key="index"
                class=" flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <!-- <dt class="order-last text-lg font-medium text-gray-500">{{ item }}</dt> -->

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">{{ item }}</dd>
            </div>


        </dl>
    </div>
</template>
<script>
import plans from "@/product.js"
export default {

    data() {
        return {
            products: plans
        }
    },
    // Pull data from API
    computed: {
        getProduct() {
            const product = this.products.find((item) => {
                return item.id == this.$route.params.id
            })
            return product
        }
    }
}
</script>