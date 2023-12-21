<template>
<ion-page>
    <Main title="Settings">
        <ion-list-header>Appearance</ion-list-header>
        <ion-list :inset="true">
            <ion-item>
                <ion-toggle :checked="darkMode" @click="toggleDarkMode()" justify="space-between">Dark Mode</ion-toggle>
            </ion-item>
        </ion-list>

        <ion-list-header>About</ion-list-header>
        <ion-list :inset="true">
            <ion-item target="_blank" href="https://x.com/lk4real_" button="true">
                <ion-label>Developer</ion-label>
                <ion-text slot="end" color="medium">Olalekan Omoniyi</ion-text>
            </ion-item>

            <ion-item>
                <ion-label>Beta Tester</ion-label>
                <ion-text slot="end" color="medium">Ronan</ion-text>
            </ion-item>

            <ion-item>
                <ion-label>Version</ion-label>
                <ion-text slot="end" color="medium">{{ packageJson.version }}</ion-text>
            </ion-item>
        </ion-list>
    </Main>
</ion-page>
</template>

<script setup>
import { Preferences } from '@capacitor/preferences'
import packageJson from './../package.json'

// Check darkmode from preferences
const pref = await Preferences.get({key: 'dark'})
let darkMode = (pref.value == 'true') ? true : false

onMounted(() => {
    if (darkMode) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
})

// Add or remove the "dark" class on the document body
function toggleDarkMode() {
    if (darkMode) {
        Preferences.set({key: 'dark', value: false})
        document.body.classList.remove('dark')
        darkMode = false
    } else {
        Preferences.set({key: 'dark', value: true})
        document.body.classList.add('dark')
        darkMode = true
    }
}
</script>