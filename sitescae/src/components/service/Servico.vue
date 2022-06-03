<template>
  <div>
    <VueSlickCarousel
      v-bind="settings"
      class="rn-slick-activation portfolio-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40"
    >
      <div
      class="mt--15 mt_sm--5 mt_md--5"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="single-service service__style--4 large-size text-center">
        <div class="service">
          <div class="icon" v-html="iconSvg(service.icon)"></div>
          <div class="content">
            <h3 class="heading-title">{{ service.title }}</h3>
            <p>
              {{ service.desc }} 
            </p>
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
            icon: "send",
            title: "Anuncie Imóveis",
            desc: ` Corretor, Imobiliária e Construtora, façam da Nevoon o banco de dados de seus imóveis e disponibilize para milhares de corretores venderem.`,
          },
          {
            icon: "zoom-in",
            title: "Encontre Imóveis",
            desc: ` Corretor, Imobiliária, encontrem o imóvel perfeito para o seu cliente, novo direto com a construtora ou usado negociando com outros corretores.`,
          },
          { 
            icon: "thumbs-up",
            title: "Feche Negócio",
            desc: `Negocie com o anunciante e firme contratos com a garantia Nevoon.`,
          },
           {
            icon: "user-plus",
            title: "Cadastre seus Leads",
            desc: ` Cadastre os seus Leads com segurança, onde só você tem acesso e combine as preferencias dele com todos os imóveis da plataforma`,
          },
          {
            icon: "trending-up",
            title: "Gerencie seu Negócio",
            desc: `Controle os Imóveis disponíveis, vendidos, e os que estiverem em negociação. Tenha controle das comissões a receber e a pagar, não perca nenhum compromisso com a agenda Nevoon e muito mais.`,
          },
        ],

 
        // for all works
        settings: {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,

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
                slidesToShow: 2,
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
