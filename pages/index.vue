<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title style='text-align: center;'>Select Testament</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-grid>
            <ion-row>
                <ion-col class='testament-btns'>
                    <ion-button router-link="/new" router-direction="forward" class='btn' expand="block" size='large'>New Testament</ion-button>
                    <ion-button router-link="/old" router-direction="forward" class='btn' expand="block" size='large'>Old Testament</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-content>
</ion-page>
</template>

<style>
.testament-btns {
    margin-top: 50%;
}

.btn {
    margin-bottom: 30px;
}
</style>