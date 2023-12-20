<template>
    <ion-list v-for="verse in verses" inset="true">
        <ion-item :router-link="`/${testament}/${book}/${chapter}/${verse.number}`" button="true">
            <ion-label>Verse {{ verse.number }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup>
const props = defineProps({
    verses: {
        type: Object,
        required: true
    },

    testament: {
        type: String,
        required: true
    },

    book: {
        type: String,
        required: true
    },

    chapter: {
        type: String,
        required: true
    }
})

const { verses, testament, book, chapter } = props
</script>