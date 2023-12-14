<script setup>
import PizzaIndex from './components/PizzaIndex.vue'
import PizzaHeader from './components/PizzaHeader.vue'
</script>

<template>

  <PizzaHeader />


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

    <PizzaIndex />

	</div>

</template>

<style scoped>
</style>
