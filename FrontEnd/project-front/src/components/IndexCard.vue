<template>
    <div class="card col m-3 indexCard" style="width: 18rem; padding: 0;">
        <img src="" class="card-img-top multi-img">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title"><i class="fa-solid fa-pizza-slice text-danger"></i>Nome</h5>
            <p class="card-text flex-grow-1">Descrizione</p>
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

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
