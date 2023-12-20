<template>
    <ion-list :id="verse.number" v-for="verse in verses" inset="true">
        <ion-item>
            <ion-label>{{ verse.number }}. {{ verse.content }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup>
const props = defineProps({
    verses: {
        type: Object,
        required: true
    }
})

const { verses } = props
</script>