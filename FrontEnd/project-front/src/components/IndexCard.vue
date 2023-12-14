<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  pizza: {
    type: Object,
    required: true
  }
});

</script>

<template>
    <div class="card col m-3 indexCard" style="width: 18rem; padding: 0;">
        <img :src="pizza.img" class="card-img-top multi-img">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title"><i class="fa-solid fa-pizza-slice text-danger"></i> {{ pizza.name }}</h5>
            <p class="card-text flex-grow-1">{{ pizza.description }}</p>
            <div class="mt-auto d-flex justify-content-center">
                <div class="me-2">
                    <button class="btn btn-danger">Dettaglio</button>
                </div>
                <form method="POST">
                    <button class="btn btn-danger">Elimina</button>
                </form>
            </div>
        </div>
    </div>
</template>