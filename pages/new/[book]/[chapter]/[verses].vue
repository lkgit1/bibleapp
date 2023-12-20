<template>
    <Main :title='`${book} Chapter ${chapter}`'>
        <Verses :verses="verses"></Verses>
    
        <BackButton :endpoint="'/new/'+ bookAbbrev +'/' + chapter"></BackButton>
    </Main>
</template>

<script setup>
import jsonData from '../../../../data/en_kjv.json'

const data = jsonData

const paths = window.location.pathname.split('/')

const bookAbbrev = paths[2]
const chapter = paths[3]
const verse = paths[4]

const verses = {}

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