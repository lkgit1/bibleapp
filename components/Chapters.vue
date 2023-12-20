<template>
    <ion-list v-for="chapter in chapters" inset="true">
        <ion-item :router-link="`/${testament}/${book}/${chapter.number}`" button="true">
            <ion-label>Chapter {{ chapter.number }}</ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup>
const props = defineProps({
    chapters: {
        type: Object,
        required: true
    },
    
    book: {
        type: String,
        required: true
    },

    testament: {
        type: String,
        required: true
    }
})

const { chapters, book, testament } = props
</script>