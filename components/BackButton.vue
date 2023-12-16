<template>
<ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button router-link="/" router-direction="back">
        <ion-icon :icon="arrowBack"></ion-icon>
    </ion-fab-button>
</ion-fab>
</template>

<script setup>
import { arrowBack } from 'ionicons/icons';
</script>