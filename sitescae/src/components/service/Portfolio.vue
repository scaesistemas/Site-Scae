<template> 
  <div> 
    <!-- Start Portfolio Activation  -->
    <VueSlickCarousel v-bind="settings" class="rn-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40">
      <!-- Start Single Portfolio  -->


        <div class="portfolio" v-for="(item, i) in portfolioContent" :key="i">
        <div class="thumbnail-inner">
         <v-icon class="icon" >{{item.icon}}</v-icon>
          <div class="content">
            <div class="inner">              
              <h4>{{ item.title }}</h4> 
               <p>{{ item.meta }}</p> 
            </div>
          </div>
        </div> 
      </div> 

      <!-- <div class="portfolio" v-for="(item, i) in portfolioContent" :key="i">
        <div class="thumbnail-inner">
         <v-icon class="icon" >{{item.icon}}</v-icon>
          <div class="content">
            <div class="inner">              
              <h4>{{ item.title }}</h4> 
               <p>{{ item.meta }}</p> 
            </div>
          </div>
        </div> 
      </div>  -->
      <!-- End Single Portfolio  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";
  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
      return {  
        portfolioContent: [
          {
            src: require("../../assets/images/portfolio/portfolio-2.jpg"),
            meta: "Possibilitamos tanto o suporte ao cliente final, quanto ao loteador, proprietários e todos os demais envolvidos na construção e desenvolvimento do empreendimento, com total transparência e segurança.",
            title: "Adminstração do Loteamento",
            icon:"fas fa-chart-line"
          },
          {
            src: require("../../assets/images/portfolio/portfolio-5.jpg"),
            meta: "Realizamos a Gestão de Recebíveis através do desenvolvimento de políticas claras de cobrança dos inadimplentes, possibilitando assim o melhor controle e segurança na previsão do fluxo de caixa da empresa.",
            title: "Gestão de Carteira de recebíveis",
            icon:"fa-solid fa-wallet"
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            meta: "Gestão dos clientes que pagaram, quem está devendo.Saber o saldo a receber dos próximos meses e até mesmo dos próximos anos Arquivar digitalmente todos os contratos e documentos do cliente do lote e principalmente do contrato.",
            title: "Gestão de Contratos",
            icon:"fa-solid fa-address-card"
          }, 
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            meta: "Negociação amigável logo nos primeiros dias da régua de cobrança aumenta a retenção de clientes e melhora o fluxo de caixa.",
            title: "Cobrança Amigável",
            icon:"fa-solid fa-handshake"
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            meta: "Busca a retenção do contrato e a retomada dos pagamentos das parcelas vencidas sem a necessidade de judicialização da dívida.",
            title: "Cobrança Extrajudicial",
            icon:"fa-solid fa-hand-holding"
          },
          {
            src: require("../../assets/images/portfolio/portfolio-6.jpg"),
            meta: "Trabalhamos com um time jurídico especialista em cobrança de carteira de trato sucessivo de imóveis. Discutimos regras junto com os credores para a judicialização da dívida e reaver os créditos de modo rápido e eficiente.",
            title: "Cobrança Judicial",
             icon:"fa fa-balance-scale"
          },
          
        ],
        // for all works
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 1263,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },          
             
          ],
        },
      };
    },
  };
</script>
