<template>
  <div>
    <VueSlickCarousel  v-bind="settings">
     <div  
      class="mt--15 mt_sm--5 mt_md--5"
      v-for="(service, i) in serviceContent" 
      :key="i"
    > 
      <div class="single-service service__style--5 large-size text-center">
        <div class="mt--10 service">
         <div class="content">  
           <v-icon class="icon"> {{service.icon}}</v-icon>
            <h3 class="heading-title">{{ service.title }}</h3>
            <p> {{ service.desc }} </p>
            <h1 class="heading-title">{{service.titleButton}}</h1>
             
            <p> Por parcela recebida</p>
            <p style="font-size:10px">{{service.subtile}}</p>
            
            <div v-for="(item ,i) in service.itens"  :key="i">
              <div>
                <v-icon size="10px" color="green" >fas fa-check</v-icon>
                <span class="span"> {{ item }} </span>  
              </div>
            </div>
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
            subtile: "(Até 500 Lotes)",
            title: "Plano Standard",
            desc: "R$ 299,00 mensais  +",
            titleButton:"R$ 8,99",
            icon:"fas fa-cloud",
            value:"(De 501 Até 1000 recebimentos mensais)",
            itens: ["Administração do Loteamento", " Gestão de carteira de Recebíveis", "Gestão dos Contratos", "Cobrança Amigável"]
          },
          {
            subtile: "(De 501 até 1000 lotes)",
            title: "Plano Business",
            desc: "R$ 199,00 mensais  +",
            titleButton:"R$ 7,99",
            icon:"fas fa-rocket",
            value:"(De 501 Até 1000 recebimentos mensais)",
            itens: ["Administração do Loteamento", " Gestão de carteira de Recebíveis", "Gestão dos Contratos", "Cobrança Amigável"]
          },
          { 
            subtile: "(Acima de 1000 Lotes)",
            title: "Plano Corporate",
            desc: "___",
            titleButton:"R$ 6,99",
            icon:"fa fa-globe",
            value:"",
            itens: ["Administração do Loteamento", " Gestão de carteira de Recebíveis", "Gestão dos Contratos", "Cobrança Amigável"]
          },          
        ],
        settings: {
          "dots": true,
          "infinite": false,
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
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
              settings: {
                slidesToShow: 2,
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
