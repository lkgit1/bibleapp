<template>
<Main title='Select Verse'>
    <ion-list v-for="verse in verses" inset="true">
        <ion-item :router-link="`/old/${book}/${chapter}/${verse.number}`" button="true">
            <ion-label>Verse {{ verse.number }}</ion-label>
        </ion-item>
    </ion-list>

    <BackButton :endpoint="'/old/' + book"></BackButton>
</Main>
</template>

<script setup>
import jsonData from '/data/en_kjv.json'

const data = jsonData
const route = useRoute()

const book = route.params.book
const chapter = parseInt(route.params.chapter)
const verses = {}

Object.keys(data).forEach((key) => {
    if (data[key].abbrev == book ) {
        const selectedBook = data[key]

        Object.keys(selectedBook.chapters).forEach(key => {
            const zeroChap = chapter - 1

            if (parseInt(key) == parseInt(zeroChap)) {
                const foundVerses = selectedBook.chapters[key]
                
                Object.keys(foundVerses).forEach(key => {
                    verses[key] = { number: parseInt(key) + 1 }
                })
            }
        })
    }
})
</script>