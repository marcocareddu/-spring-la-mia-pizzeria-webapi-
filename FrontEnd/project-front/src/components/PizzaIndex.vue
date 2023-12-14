<script setup>
import indexCard from './IndexCard.vue'
</script>

<template>

		<!-- If list is empty -->
			<!-- <div class="title d-flex justify-content-center mt-5">
				<h1>Non è presente nessuna pizza</h1>
			</div> -->

		<!-- If list contains elements -->
			<div class="card-container d-flex row row-cols-4 justify-content-center">
        <indexCard />
			</div>
</template>

<style scoped>
</style>
