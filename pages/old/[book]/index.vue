<template>
<Main title='Select Chapter'>
    <ion-list v-for="chapter in chapters" inset="true">
        <ion-item :router-link="`/old/${book}/${chapter.number}`" button="true">
            <ion-label>Chapter {{ chapter.number }}</ion-label>
        </ion-item>
    </ion-list>

    <BackButton endpoint='/old'></BackButton>
</Main>
</template>

<script setup>
import jsonData from '/data/en_kjv.json'

const data = jsonData

const route = useRoute()

const book = route.params.book
const chapters = {}

Object.keys(data).forEach((key) => {
    if (data[key].abbrev == book ) {
        Object.keys(data[key].chapters).forEach(key => {
            const chapter = parseInt(key) + 1

            chapters[key] = {number: chapter}
        })
    }
})
</script>