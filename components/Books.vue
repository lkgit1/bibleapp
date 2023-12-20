<template>
    <ion-list v-for='book in books' inset="true">
        <ion-item :router-link="`/${testament}/${book.abbrev}`" button="true">
            <ion-label>{{ book.name }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup>
const props = defineProps({
    books: {
        type: Object,
        required: true
    },

    testament: {
        type: String,
        required: true
    }
})

const { books, testament } = props
</script>