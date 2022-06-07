<template>
  <div>
      
    <!--BANNER -->
        <Header>
          <img slot="logo-dark" src="../../assets/images/logo/logoscae.png" class="logo-dark"/>
        </Header>
  
        <div class="rn-slider-area" id="home">
          <div class="slide slide-style-2 slider-paralax d-flex align-center justify-center bg_image bg_image--32" data-black-overlay="2">
            <Banner>
              <h1 slot="heading-title" class="heading-title theme-gradient">SCAE</h1>
              <p slot="description" class="description">Gestão de Carteira de Loteamentos.</p>
            </Banner>
          </div> 
        </div>
     <!--BANNER -->
    
        <v-row class="spacing-text pt--100" style="background-color: #FAFAFA"  id="serviços">
          <v-col lg="12" class="pl-12">
            <div class="section-title text-left mb--0 mb_sm--0 mb_md--0">
              <h2>Software para Gerenciar seus Loteamentos</h2>
              <p>

                Conheça as vantagens que o serviço da SCAE traz para você.
                <br />
                Automatize o gerenciamento dos recebíveis de seus lotes.
              </p>
            </div>
          </v-col>
        </v-row>

        <div class="rn-content-box-area rn-content-box-style--1 bg_color--1 pt--50" style="background-color: #FAFAFA">
          <v-row justify="center" align="center" >
            <v-col lg="4" md="12" cols="12" class="display">
              <div class="designer-thumbnail img">
                <img src="../../assets/images/servico/contrato.svg" alt="Featured Images"/>
              </div>
            </v-col>

            <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
              <div class="content">
                <p class="subtitle"></p>
                <h2 class="fontWeight500">Contratos</h2>
                <p>
                Ao receber a proposta do seu corretor e cadastrar no sistema você inicia todo o controle da operação, desde a elaboração da promessa de compra e venda, gerar a entrada com os valores para a loteadora ou para a vendedora,
                gerar parcelas do financiamento, aditar contratos, envio de boletos e e-mails  automáticos.
                </p>
              </div>
            </v-col>
          </v-row>
        </div> 

        <div class="rn-content-box-area rn-content-box-style--1 bg_color--1" style="background-color: #FAFAFA">
          <v-row justify="center" align="center">
            <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
              <div class="content">
                <p class="subtitle"></p>
                <h2 class="fontWeight500">Cobranças automatizadas</h2>
                <p>
                Controle com mais precisão o seu fluxo de caixa. Nós emitimos as cobranças, enviamos por e-mail e Whatsapp de forma automática. Você ainda tem acesso a régua de cobrança com todos os status dos pagamentos e inadimplência por tempo de atraso em tempo real.
                </p>
              </div>
            </v-col>

            <v-col lg="4" md="12" cols="12" class="display">
              <div class="designer-thumbnail img">
                <img class="img" src="../../assets/images/servico/cobranca.svg" alt="Featured Images"/>
              </div>
            </v-col>
          </v-row>
        </div> 

        <div class="rn-content-box-area rn-content-box-style--1 bg_color--1" style="background-color: #FAFAFA">
          <v-row justify="center" align="center">
            <v-col lg="4" md="12" cols="12" class="display">
              <div class="designer-thumbnail img">
                <img  src="../../assets/images/servico/cliente.svg" alt="Featured Images"/>
              </div>
            </v-col>

            <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
              <div class="content">
                <p class="subtitle"></p>
                <h2 class="fontWeight500">Página do comprador do Lote</h2>
                <p>
                  Seu cliente pode emitir a 2a via de boleto, gerar boleto de quitação e antecipação de parcelas, além de desfrutar do total controle de seus pagamentos e emitir o histórico anual para declaração do IRPF. 
                  Com a Scae você disponibiliza uma página para o comprador com todas as informações que ele precisa. Com isso, reduza trabalhos operacionais do seu time.
                </p>
              </div>
            </v-col>
          </v-row>
        </div> 

        <div class="rn-content-box-area rn-content-box-style--1 bg_color--1" style="background-color: #FAFAFA">
          <v-row justify="center" align="center">
            <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
              <div class="content">
                <p class="subtitle"></p>
                <h2 class="fontWeight500">Dashboards e KPIS</h2>
                <p>
                Com Dashboards e KPIS da Scae é possível visualizar dados de faturamento mensal, vendas por corretor, inadimplência mensal, acordos realizados e muito mais, tudo em formato gráfico de fácil e rápida leitura da situação do seu loteamento ou da sua empresa. Com os resultados de desempenho fica fácil traçar e acompanhar às metas da empresa, incorporando os dados financeiros e operacionais ao processo de negócio.
                </p>
              </div>
            </v-col>
            <v-col lg="4" md="12" cols="12" class="display">
              <div class="designer-thumbnail img">
                <img class="img" src="../../assets/images/servico/dashboards3.svg" alt="Featured Images"/>
              </div>
            </v-col>
          </v-row>
        </div> 

      <!-- PLANOS -->
          <div class="rn-portfolio-area rn-section-gap bg_color--1" style="background-color: #FAFAFA"> 
            <div class="portfolio-sacousel-inner">
              <v-container>
                <v-row>
                  <v-col lg="12">
                    <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                      <h2 class="heading-title">Nossos Planos</h2>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

              <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                  <v-flex xs12>
                    <Service />
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </div> 
      <!-- PLANOS -->
      
      <!-- FAIXA -->
          <div>
            <v-container>
              <CallToActionTwo />
            </v-container>
          </div>   
      <!-- FAIXA -->

      <!-- SERVIÇOS -->
          <div class="rn-portfolio-area rn-section-gap bg_color--1" style="background-color: #FAFAFA"> 
            <div class="portfolio-sacousel-inner">
              <v-container>
                <v-row>
                  <v-col lg="12">
                    <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                      <h2 class="heading-title">Serviços de Gestão de Loteamento</h2>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

              <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                  <v-flex xs12>
                    <ServiceManagement />
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </div>
      <!-- SERVIÇOS -->

        <!-- PLANOS DOS SERVIÇOS GESTÃO DE LOTEAMENTOS -->
          <div class="rn-portfolio-area rn-section-gap bg_color--1" style="background-color: #FAFAFA"> 
            <div class="portfolio-sacousel-inner">
              <v-container>
                <v-row>
                  <v-col lg="12">
                    <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                      <h2 class="heading-title">Planos</h2>
                    </div>
                  </v-col>
                </v-row>
              </v-container>

              <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                  <v-flex xs12>
                    <ServiceSoftware />
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </div> 
      <!-- PLANOS DOS SERVIÇOS GESTÃO DE LOTEAMENTOS -->

      <!-- SOBRE  -->
          <div class="about-area rn-section-gap bg_color--1" id="sobre" >
            <About>
              <img slot="thum-img" class="w-100" src="../../assets/images/about/about-3.jpg" alt="About Images"/>
            </About>
          </div>
      <!-- SOBRE -->
    
      <!-- RODAPÉ  -->
          <Footer />
      <!-- RODAPÉ  -->

      
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import Banner from "../../components/slider/Banner";
import CallToActionTwo from "../../components/callto-action/CallToActionTwo";
import Contador from "../../components/contador/Contador";
import Service from "../../components/service/Servico.vue";
import ServiceSoftware from "../../components/service/ServiceSoftware.vue";

import ServiceManagement from "../../components/service/Portfolio.vue";
import Perguntas from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About2";

export default {
  components: {
    Header,
    Banner,
    CallToActionTwo,
    Service,
    ServiceSoftware,
    ServiceManagement,
    Contador,
    Footer,
    Perguntas,
    About
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1265px) {
  .display {
   display :none;
  }
}
</style>
