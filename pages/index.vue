<template>
<ion-page>
    <Main title='Select Testament'>
        <ion-grid>
            <ion-row>
                <ion-col class='testament-btns'>
                    <ion-button router-link="/new" router-direction="forward" class='btn' expand="block" size='large'>New Testament</ion-button>
                    <ion-button router-link="/old" router-direction="forward" class='btn' expand="block" size='large'>Old Testament</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </Main>
</ion-page>
</template>