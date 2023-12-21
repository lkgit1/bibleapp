<template>
<ion-page>
    <Main title='Select Book'>
        <Books :books="books" testament="old"></Books>

        <BackButton endpoint='/'></BackButton>
    </Main>
</ion-page>
</template>

<script setup>
import data from '/data/en_kjv.json'

const books = {}

Object.keys(data).forEach((key) => {
    if (key < 39) {
        books[key] = data[key]
    }
})
</script>