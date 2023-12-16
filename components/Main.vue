<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title style='text-align: center;'>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content color='light' class="ion-padding">
        <slot></slot>
    </ion-content>
</ion-page>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

const { title } = props
</script>

<style>
.testament-btns {
    margin-top: 50%;
}

.btn {
    margin-bottom: 30px;
}
</style>