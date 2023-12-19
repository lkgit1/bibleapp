<template>
<Main :title='`${book} Chapter ${chapter}`'>
    <ion-list :id="verse.number" v-for="verse in verses" inset="true">
        <ion-item>
            <ion-label>{{ verse.number }}. {{ verse.content }}</ion-label>
        </ion-item>
    </ion-list>

    <BackButton :endpoint="'/old/'+ bookAbbrev +'/' + chapter"></BackButton>
</Main>
</template>

<script setup>
import jsonData from '../../../../data/en_kjv.json'

const data = jsonData
const route = useRoute()
const verses = {}

const bookAbbrev = route.params.book
const chapter = parseInt(route.params.chapter)
const verse = route.params.verse
let book = null

Object.keys(data).forEach((key) => {
    if (data[key].abbrev == bookAbbrev ) {
        const selectedBook = data[key]
        book = selectedBook.name

        Object.keys(selectedBook.chapters).forEach(key => {
            const zeroChap = chapter - 1

            if (parseInt(key) == parseInt(zeroChap)) {
                const foundVerses = selectedBook.chapters[key]
                
                Object.keys(foundVerses).forEach(key => {
                    const verseNumber = parseInt(key) + 1
                    const verseContent = foundVerses[key]

                    verses[key] = { number: verseNumber, content: verseContent} 
                })
            }
        })
    }
})

onMounted(() => {
    setTimeout(() => {
        document.getElementById(verse).scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    }, 1000)
})
</script>