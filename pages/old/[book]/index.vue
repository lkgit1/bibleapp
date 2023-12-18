<template>
<Main title='Select Chapter'>
    <ion-list inset="true">
        <ion-item router-link="/old/genesis/1/verses" button="true">
            <ion-label>1</ion-label>
        </ion-item>
        <ion-item router-link="/old/genesis/1/verses" button="true">
            <ion-label>2</ion-label>
        </ion-item>
        <ion-item router-link="/old/genesis/1/verses" button="true">
            <ion-label>3</ion-label>
        </ion-item>
    </ion-list>

    <BackButton endpoint='/old'></BackButton>
</Main>
</template>