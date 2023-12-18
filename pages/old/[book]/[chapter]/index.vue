<template>
<Main title='Select Verse'>
    <ion-list inset="true">
        <ion-item router-link="/old/genesis/1/2" button="true">
            <ion-label>1</ion-label>
        </ion-item>
        <ion-item router-link="/old/genesis/1/2" button="true">
            <ion-label>2</ion-label>
        </ion-item>
        <ion-item router-link="/old/genesis/1/2" button="true">
            <ion-label>3</ion-label>
        </ion-item>
    </ion-list>

    <BackButton endpoint='/old/genesis'></BackButton>
</Main>
</template>