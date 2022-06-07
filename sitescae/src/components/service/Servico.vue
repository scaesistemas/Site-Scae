<template>
  <div>
    <VueSlickCarousel  
      v-bind="settings"
      class=""
    >
     <div  
      class="mt--15 mt_sm--5 mt_md--5"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--4 large-size text-center">
        <div class="mt--10 service">
        <div class="content">  
           <p> {{service.subtile}}</p>
            <h3 class="heading-title">{{ service.title }}</h3>
            <p> {{ service.desc }} </p>

            <a v-if="service.desc != 0" class="rn-button-style--2 mt--30 mt_sm--30 mt_md--30" target="_blank" href="https://materiais.scae.adm.br/conheca-a-scae">
              <span>{{service.titleButton}}</span>
            </a>

            <a v-else class="rn-button-style--2 mt--20 mt_sm--30 mt_md--30" target="_blank" href="https://materiais.scae.adm.br/conheca-a-scae">
              <span>{{service.titleButton}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </VueSlickCarousel>
</div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";
  import feather from "feather-icons";
  export default { 

    components: {
      VueSlickCarousel,
    },
    data() {
      return {
        serviceContent: [
          {
            subtile: "Até 500 Lotes*",
            title: "R$ 4,50",
            desc: "Por Lote",
            titleButton:"Contrate agora"
          },
          {
            subtile: "Até 2000 lotes*",
            title: "R$ 4,00",
            desc: "Por Lote",
            titleButton:"Contrate agora"
          },
          { 
            subtile: "Por lote com boleto incluso*",
            title: "Acima de 2 mil lotes",
            desc: "",
            titleButton:"Entre em Contato"
          },          
        ],
        // for all works
        settings: {
         /* focusOnSelect: true,
          centerMode: true,
          infinite: true,
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,*/
          "dots": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "autoplay": false,
          "autoplaySpeed": 2000,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
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

    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
