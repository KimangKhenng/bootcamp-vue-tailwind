<template>
    <div class="cursor-pointer hover:shadow-lg divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div class="p-6 sm:px-8">
            <h2 class="text-lg font-medium text-gray-900">
                {{ item.name }}
                <span class="sr-only">Plan</span>
            </h2>

            <p class="mt-2 text-gray-700">{{ item.description }}</p>

            <p class="mt-2 sm:mt-4">
                <strong class="text-3xl font-bold text-gray-900 sm:text-4xl"> {{ item.price }} </strong>

                <span class="text-sm font-medium text-gray-700">/month</span>
            </p>

            <router-link
                class="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                :to="`/products/${item.id}`"> Get Started </router-link>
        </div>

        <div class="p-6 sm:px-8">
            <p class="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

            <ul class="mt-2 space-y-2 sm:mt-4">
                <li class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-indigo-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span class="text-gray-700"> 10 users </span>
                </li>

                <li class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-indigo-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span class="text-gray-700"> 2GB of storage </span>
                </li>

                <li class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-indigo-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span class="text-gray-700"> Email support </span>
                </li>

                <li class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-red-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span class="text-gray-700"> Help center access </span>
                </li>

                <li class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-red-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span class="text-gray-700"> Phone support </span>
                </li>

                <li class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5 text-red-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span class="text-gray-700"> Community access </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {
                return {

                }
            }
        }
    }
}
</script>