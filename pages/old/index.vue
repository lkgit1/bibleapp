<template>
<Main title='Select Book'>
    <ion-list v-for='book in oldTestament' inset="true">
        <ion-item :router-link="`/old/${book.abbrev}`" button="true">
            <ion-label>{{ book.name }}</ion-label>
        </ion-item>
    </ion-list>

    <BackButton endpoint='/'></BackButton>
</Main>
</template>

<script setup>
import data from '/data/en_kjv.json'

const oldTestament = {}

Object.keys(data).forEach((key) => {
    if (key < 39) {
        oldTestament[key] = data[key]
    }
})
</script>