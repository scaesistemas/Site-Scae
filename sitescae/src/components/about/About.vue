<template>
  <v-row>
    <v-col lg="12" md="12" cols="12">
      <div class="about-inner inner">
        <div class="section-title text-left">
          <v-row class="section-title-center" >
            <v-col lg="2" md="2" cols="12"></v-col>
            <v-col lg="8" md="12" cols="12">
              <h2 class="heading-title">Perguntas frequentes</h2>
            </v-col>
          </v-row>

          <v-row class="mr-6 section-subtitle"> 
            <v-col lg="3" md="3" cols="12"></v-col>
            <v-col lg="8" md="12" cols="12">
              <p>Tem dúvidas sobre a Nevoon? Veja nossa seção de FAQ abaixo.</p>
            </v-col> 
          </v-row>
        </div> 

        <v-row class="ml-1"> 
          <v-col lg="3" md="3" cols="12"></v-col>
          <v-col lg="7" md="12" cols="12">
            <div class="rn-accordion mt--30"  >
              <Accordion />
            </div>
          </v-col>
        </v-row>

        <v-row class="ml-1">
          <v-col lg="3" md="12" cols="12"></v-col>
          <v-col lg="9" md="12" cols="12">
            <div class="about-button mt--20">
              <a class="rn-button-style--2 btn_solid" href="contact"
                >Entre em Contato</a
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template> 
<script>
import Accordion from "../../components/perguntas/Perguntas";
export default {
  components: {
    Accordion,
  },
  data() {
    return {};
  },
};
</script>
