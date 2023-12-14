<script setup>
import IndexCard from './IndexCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue';


const pizzas = ref(null);

onMounted(async () => {
  const data = await axios.get('http://localhost:8080/api/v1.0/pizzas')
  pizzas.value = data.data;
});

</script>

<template>
	<div class="container">
		<div class="title d-flex justify-content-center my-5">
			<h1><i class="fa-solid fa-pizza-slice text-danger"></i> Le Pizze:</h1>
		</div>

		<!-- Search bar -->
		<div class="d-flex justify-content-center">
			<form>
				<div class="input-group my-3 search-container">
					<input type="text" name="searched" class="form-control" placeholder="Ricerca una pizza">
				</div>
			</form>
		</div>
		<!-- If list is empty -->
			<!-- <div class="title d-flex justify-content-center mt-5">
				<h1>Non è presente nessuna pizza</h1>
			</div> -->

		<!-- If list contains elements -->
		<div class="card-container d-flex row row-cols-4 justify-content-center">
			<IndexCard v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
		</div>
	</div>

</template>