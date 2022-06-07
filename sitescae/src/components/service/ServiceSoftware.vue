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
            subtile: "Até 500 Lotes*",
            title: "Plano Standard",
            desc: "R$ 249,00 mensais +",
            titleButton:"R$ 8,99",
            icon:"fas fa-cloud",
            value:"(De 501 Até 1000 recebimentos mensais)",
            itens: ["Gestão da carteira de recebíveis","Gestão eletrônica dos contratos","Serviço de atendimento aos ao cliente final da Contratante", "Cobrança contratual até 90 dias de atraso", "Régua de cobrança com envio automático de e-mails", "Portal para o cliente final emitir boleto e consultar o contrato", "Relatórios gerenciais e estratégicos"
            ,"Dashboards e KPI's com resultados em tempo real", "10 GB de armazenamento de documentos", "Backup diário dos dados"]
          },
          {
            subtile: "Até 2000 lotes*",
            title: "Plano Business",
            desc: "R$ 299,00 mensais +",
            titleButton:"R$ 9,99",
            icon:"fas fa-rocket",
            value:"(De 501 Até 1000 recebimentos mensais)",
            itens: ["Gestão da carteira de recebíveis","Gestão eletrônica dos contratos","Serviço de atendimento aos ao cliente final da Contratante", "Cobrança contratual até 90 dias de atraso", "Régua de cobrança com envio automático de e-mails", "Portal para o cliente final emitir boleto e consultar o contrato", "Relatórios gerenciais e estratégicos", "Dashboards e KPI's com resultados em tempo real",
            "50 GB de armazenamento de documentos", "Backup diário dos dados", "+ 1 Melhoria por mês sem custo", "Módulo Financeiro - Contas a Pagar e a Receber", "Módulo Almoxarifado - com multi almoxarifados", "Módulo de Compras", "Módulo Gestão de Contrato de Empreiteiros"]
          },
          { 
            subtile: "Por lote com boleto incluso*",
            title: "Plano Corporate",
            desc: "R$ 599,00 mensais +",
            titleButton:"R$ 18,99",
            icon:"fa fa-globe",
            value:"",
            itens: ["Gestão da carteira de recebíveis","Gestão eletrônica dos contratos","Serviço de atendimento aos ao cliente final da Contratante", "Cobrança contratual até 90 dias de atraso", "Régua de cobrança com envio automático de e-mails", "Portal para o cliente final emitir boleto e consultar o contrato", "Relatórios gerenciais e estratégicos", "Dashboards e KPI's com resultados em tempo real",
            "100 GB de armazenamento de documentos", "Backup diário dos dados", "+ 1 Melhoria por mês sem custo", "Módulo Financeiro - Contas a Pagar e a Receber", "Módulo Almoxarifado - com multi almoxarifados", "Módulo de Compras", "Módulo Gestão de Contrato de Empreiteiros", "Cobrança pré judicial", "Cobrança Judicial"]
          },          
        ],
        settings: {
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
