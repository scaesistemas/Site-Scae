<template>
    <section class="teams" id="teams">
        <div class="max-width">    
            <div class="carousel owl-carousel">
              <VueSlickCarousel v-bind="settings" class="rn-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40" >
                
                  <v-col v-for="item in teamContent" :key="item.id" class="pa-2">
                    <div class="card">
                      <v-col cols="12" md="12" lg="12" class="box">
                          <img :src="item.src">
                          <div class="text">{{item.title}}</div>
                          <p> {{item.designation}} </p>
                      </v-col>
                    </div>
                  </v-col> 
              </VueSlickCarousel>
            </div>
        </div>
    </section>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";
  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
      return {
        teamContent: [
          {
            id: 1,
            src: require("../../assets/images/clientes/novarical.jpg"),
            title: "Nova Rical",
            designation: "Imobiliárias",
          },
          {
            id: 2,
            src: require("../../assets/images/clientes/jcv.jpg"),
            title: "JCV",
            designation: "Imobiliárias",
          },
          {
            id: 3,
            src: require("../../assets/images/clientes/logo-paracatu.jpg"),
            title: "Paracatu",
            designation: "Imobiliárias",
          },
          {
            id: 4,
            src: require("../../assets/images/clientes/drs.jpg"),
            title: "DRS",
            designation: "Construtora",
          },
        ],

        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },          
             
          ],
        },
      };
    },
  };
</script>
