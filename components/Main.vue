<template>
<Head>
    <Meta name="color-scheme" content="light dark"/>
</Head>
<ion-header>
    <ion-toolbar>
        <ion-title style='text-align: center;'>{{ title }}</ion-title>
    </ion-toolbar>
</ion-header>
<ion-content class="ion-padding text-xl">
    <slot></slot>

    <SettingsButton endpoint="/settings"></SettingsButton>
</ion-content>
</template>

<script setup>
import { Preferences } from '@capacitor/preferences';

// Check darkmode from localstorage
const pref = await Preferences.get({key: 'dark'})
let darkMode = (pref.value == 'true') ? true : false

onMounted(() => {
    document.body.classList.toggle('dark', darkMode)
})

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

const { title } = props
</script>

<style>
.testament-btns {
    margin-top: 50%;
}

.btn {
    margin-bottom: 30px;
}
</style>