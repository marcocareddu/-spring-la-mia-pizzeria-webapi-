<script setup>
import IndexCard from "./IndexCard.vue";
import DetailCard from "./DetailCard.vue";
import PizzaForm from "./PizzaForm.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

// Consts and vars
const pizzas = ref(null);
const list = ref(true);
const singlePizza = ref({});
const showForm = ref(false);
let formType = "";
const modifiedPizza = ref({});

const handleSinglePizza = (pizza) => {
	list.value = false;
	singlePizza.value = pizza;
	showForm.value = false;
};

const handleListPizza = (listPizza) => {
	list.value = true;
	singlePizza.value = null;
	showForm.value = false;
};

onMounted(async () => {
	const data = await axios.get("http://localhost:8080/api/v1.0/pizzas");
	pizzas.value = data.data;
});

const showPizzaForm = () => {
	showForm.value = true;
	list.value = false;
	singlePizza.value = {};
	formType = "create";
	modifiedPizza.value = {};
};

const showModifyForm = (data) => {
    showForm.value = true;
    list.value = false;
    formType = data.action;
    modifiedPizza.value = data.pizza;
};


</script>

<template>
	<header class="position-fixed shadow d-flex align-items-center">
		<div class="container justify-content-between d-flex align-items-center">
			<a @click="handleListPizza">
				<h1><i class="fa-solid fa-pizza-slice text-danger"></i></h1>
			</a>

			<div class="d-flex">
				<button @click="showPizzaForm" class="btn btn-danger">
					Crea nuova pizza
				</button>
			</div>
		</div>
	</header>

	<div class="container">
		<div class="title d-flex justify-content-center my-5">
			<h1><i class="fa-solid fa-pizza-slice text-danger"></i> Le Pizze:</h1>
		</div>

		<!-- Search bar -->
		<div class="d-flex justify-content-center">
			<form>
				<div class="input-group my-3 search-container">
					<input type="text" name="searched" class="form-control" placeholder="Ricerca una pizza" />
				</div>
			</form>
		</div>

		<!-- If list is empty -->
		<div v-if="!pizzas || pizzas.length === 0" class="title d-flex justify-content-center mt-5">
			<h1>Non è presente nessuna pizza</h1>
		</div>

		<!-- If list contains elements -->
		<div class="card-container d-flex row row-cols-4 justify-content-center">
			<IndexCard v-if="list" v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza"
				@single-pizza="handleSinglePizza" />
			<DetailCard @createForm="showModifyForm" v-if="!list && !showForm" :pizza="singlePizza" @listPizza="handleListPizza" />
		</div>
		<PizzaForm v-if="showForm" :pizzaProp="modifiedPizza" :action="formType" />
	</div>
</template>