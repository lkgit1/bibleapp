<template>
<ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button :router-link="endpoint" router-direction="back">
        <ion-icon :icon="arrowBack"></ion-icon>
    </ion-fab-button>
</ion-fab>
</template>

<script setup>
import { arrowBack } from 'ionicons/icons';

const props = defineProps({
    endpoint: {
        type: String,
        required: true
    }
})

const { endpoint } = props
</script>