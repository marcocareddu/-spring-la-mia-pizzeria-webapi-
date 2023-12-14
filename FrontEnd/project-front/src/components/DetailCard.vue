<script setup>
import { defineProps, defineEmits } from 'vue';

// Props
const props = defineProps({
    pizza: {
        type: Object,
        required: true
    }
});

// Emits
const emits = defineEmits(['listPizza', 'createForm']);

const handleModifyForm = () => {
    emits('createForm', { action: 'modify', pizza: props.pizza }); 
};
</script>

<template>
<div class="card col-6 mt-5 p-0">
		<img :src="pizza.img" class="card-img-top img-fluid">
		<div class="card-body text-center">
			<h4 class="card-title"><i class="fa-solid fa-pizza-slice text-danger"></i> {{ pizza.name }}</h4>
			<p class="card-text">{{ pizza.description }}</p>
			<h6 class="text-danger">Prezzo €{{ pizza.price }}</h6>

			<!-- Ingredients -->
			<div>
				<h6 class="card-title mt-4">Ingredienti</h6>
				<span v-for="ingredient in pizza.ingredients" :key="ingredient.id" class="card-text my-2">{{ ingredient.name }} </span>
			</div>

			<!-- Promos -->
			<div>
				<h6 class="card-title mt-4">Promozioni Attive</h6>
				<p v-for="promo in pizza.promos" class="card-text my-2"> {{ promo.name }} </p>
			</div>

			<!-- Single Card Buttons-->
			<div class="d-flex justify-content-center">
				<div class="m-2">
                    <button @click="$emit('listPizza', true)" class="me-2 btn btn-danger">Torna alla lista</button>
                    <button @click="handleModifyForm" class="me-2 btn btn-danger">Modifica</button>
					<form method="POST">
						<button class="btn btn-danger">Elimina</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>