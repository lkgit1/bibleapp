<template>
    <ion-fab v-show="showButton" slot="fixed" vertical="bottom" horizontal="start">
        <ion-fab-button router-link="/settings" router-direction="forward">
            <ion-icon :icon="settings"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>

<script setup>
import { settings } from 'ionicons/icons';

const props = defineProps({
    endpoint: {
        type: String,
        required: true
    }
})

const showButton = ref(true)

const paths = window.location.pathname.split('/')
const page = paths[1]

if (page == 'settings') {
    showButton.value = false
}

const { endpoint } = props
</script>