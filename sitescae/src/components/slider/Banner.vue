<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="inner text-center">
          <slot name="heading-title"></slot>
          <slot name="description"></slot>
          <div class="slide-btn">
             <a target="_blank" class="rn-button-style--2"  href="https://materiais.scae.adm.br/conheca-a-scae">Contato</a>
            <!-- <router-link
              class="rn-button-style--2 btn-primary-color"
              to="https://materiais.scae.adm.br/conheca-a-scae"
              >Contato</router-link
            > -->
          </div>
        </div>
      </v-col>
    </v-row> 
  </v-container>
</template>
 