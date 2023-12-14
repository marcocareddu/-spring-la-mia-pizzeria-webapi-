 <script>
        export default{
            props: ['pizzaProp', 'action'],
            data() {
                return {
                    pizza: this.pizzaProp,
                };
            },
            methods: {
                submitForm() {
                }
            }
        };

        </script>

<template>
    <div class="title d-flex justify-content-center">
        <h1 v-if="action === 'create'">Aggiungi nuova Pizza:</h1>
        <h1 v-if="action === 'edit'">Modifica Pizza:</h1>
    </div>

    <form @submit.prevent="submitForm">
        <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input v-model="pizza.name" type="text" class="form-control" id="name" placeholder="Margherita, bianca, napoletana...">
        </div>

        <div class="mb-3">
            <label for="description" class="form-label">Ingredienti</label>
            <textarea v-model="pizza.description" type="text" class="form-control" id="description" rows="3" placeholder="Pomodoro, mozzarella..."></textarea>
        </div>

        <div class="mb-3">
            <label for="img" class="form-label">Link foto</label>
            <input v-model="pizza.img" type="text" class="form-control" id="img" placeholder="https://link/immagine.it/...">
        </div>

        <div class="mb-3">
            <label for="price" class="form-label">Prezzo</label>
            <input v-model="pizza.price" type="text" class="form-control" id="price" placeholder="5.00">
        </div>

        <!-- Ingredients -->
        <div class="checkboxes">
            <h5>Ingredienti</h5>

            <div v-for="element in ingredients" :key="element.id" class="form-check">
                <input v-model="pizza.ingredients" class="form-check-input" type="checkbox" :value="element.id" :id="element.id">
                <label :for="element.id" class="form-check-label">{{ element.name }}</label>
            </div>
        </div>

        <div class="button-container">
            <button v-if="action === 'create'" class="btn btn-danger">Aggiungi</button>
            <button v-if="action === 'edit'" class="btn btn-danger">Aggiorna Pizza</button>
        </div>
    </form>
</template>
