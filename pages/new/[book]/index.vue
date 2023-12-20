<template>
    <Main title='Select Chapter'>
        <Chapters :chapters="chapters" :book="book" testament="new"></Chapters>
    
        <BackButton endpoint='/new'></BackButton>
    </Main>
</template>
    
<script setup>
import jsonData from '/data/en_kjv.json'

const data = jsonData

const paths = window.location.pathname.split('/')

const book = paths[2]
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