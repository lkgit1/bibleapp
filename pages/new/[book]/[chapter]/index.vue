<template>
<ion-page>
    <Main title='Select Verse'>
        <VersesList :verses="verses" :book="book" :chapter="chapter" testament="new"></VersesList>

        <BackButton :endpoint="'/new/' + book"></BackButton>
    </Main>
</ion-page>
</template>

<script setup>
import jsonData from '/data/en_kjv.json'

const data = jsonData

const paths = window.location.pathname.split('/')

const book = paths[2]
const chapter = paths[3]
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