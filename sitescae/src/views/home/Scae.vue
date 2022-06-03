<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img
        height="40px"
        slot="logo"
        src="../../assets/images/logo/logoscae.png"
        class="logo-light"
      />
      <img
        slot="logo-dark"
        src="../../assets/images/logo/logoscae.png"
        class="logo-dark"
      />
    </Header>
    <!-- End Header Area -->
 
    <!-- Start Slider Area  -->
    <div class="rn-slider-area" id="home">
      <div
        class="slide slide-style-2 slider-paralax d-flex align-center justify-center bg_image bg_image--32"
        data-black-overlay="4"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            SCAE
          </h1>
          <p slot="description" class="description">
            Gestão de Carteira de lotes e terrenos.
          </p>
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->
     
      <!-- <div
            class="rn-content-box-area rn-content-box-style--1 bg_color--1"
            id="corretor"
          >
            <v-row class="row--0" align="center">
              <v-col lg="6" md="12" cols="12">
                <div class="thumbnail">
                  <img
                    height=" "
                    src="../../assets/images/featured/corretor.png"
                    alt="Featured Images"
                  />
                </div>
              </v-col>

              <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
                <div class="content">
                  <p class="subtitle"></p>
                  <h2 class="fontWeight500">Contratos</h2>
                  <p><span>Você</span> com acesso a centenas de construtoras</p>
                  <p>
                    Acesse milhares de imóveis, negocie e feche negócio direto com as
                    construtoras.
                  </p>
                  <a
                    class="rn-button-style--2 mt--10 mt_sm--30 mt_md--30"
                    href="http://development.nevoon.com.br/cadastro"
                    ><span>Entre para a Nevoon</span></a
                  >
                </div>
              </v-col>
            </v-row>
          </div> -->

      
      <v-row class="spacing-text pt--100" style="background-color: #FAFAFA">
        <v-col lg="12" class="pl-12">
          <div class="section-title text-left mb--0 mb_sm--0 mb_md--0">
            <h2>Software para Gerenciar seus Loteamentos</h2>
            <p>
              Conheça as vantagens que o serviço da SCAE traz pra você,
              <br />
              gerencie seus lotes sem burocracia.
            </p>
          </div>
        </v-col>
      </v-row>

      <div class="rn-content-box-area rn-content-box-style--1 bg_color--1 pt--50" id="serviços" style="background-color: #FAFAFA">
        <v-row justify="center" align="center">
          <v-col lg="4" md="12" cols="12">
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
            <div class="content ">
              <p class="subtitle"></p>
              <h2 class="fontWeight500">Cobranças automatizadas</h2>
              <p>
               Controle com mais precisão o seu fluxo de caixa. Nós emitimos as cobranças, enviamos por e-mail e Whatsapp de forma automática. Você ainda tem acesso a régua de cobrança com todos os status dos pagamentos e inadimplência por tempo de atraso em tempo real.
              </p>
            </div>
          </v-col>

          <v-col lg="4" md="12" cols="12">
            <div class="designer-thumbnail img">
              <img class="img" src="../../assets/images/servico/cobranca.svg" alt="Featured Images"/>
            </div>
          </v-col>
        </v-row>
      </div> 

      <div class="rn-content-box-area rn-content-box-style--1 bg_color--1" style="background-color: #FAFAFA">
        <v-row justify="center" align="center">
          <v-col lg="4" md="12" cols="12">
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
          <v-col lg="4" md="12" cols="12">
            <div class="designer-thumbnail img">
              <img class="img" src="../../assets/images/servico/dashboards3.svg" alt="Featured Images"/>
            </div>
          </v-col>
        </v-row>
      </div> 


     <!-- <div class="rn-portfolio-area rn-section-gap bg_color--1">
      <div class="portfolio-sacousel-inner pb--30">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                <h2 class="heading-title">Nossos Planos</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        
          <Service />
       
      </div>
    </div> -->
    <!-- CONTADOR  -->
     <!--<div
      class="rn-counterup-area pt_sm--50 pt--60 pt_md--50 pb--120 bg_color--1"
    >
      <v-container>
        <Contador />
      </v-container>
    </div> -->
    <!-- FINAL CONTADOR -->

    <!-- CONSTRUTORA   -->
    <br><br><br><br><br>
    <!-- <div
      class="
        call-to-action-wrapper call-to-action-two
        bg_image bg_image--33
        text-white-wrapper
        ptb--150
        ptb_lg--80
        ptb_md--80
        ptb_sm--80
      "
      id="construtora"
    >
      <v-container>
        <CallToActionTwo />
      </v-container>
    </div>  -->
    <!--FINAL CONSTRUTORA  -->
 
    <!-- Start Portfolio Area  -->
     <!-- <div class="rn-section-gap bg_color--1" id="vantagens">
      <div class="">
        
          <v-row class="spacing-text">
            <v-col lg="12">
              <div class="section-title text-left mb--0 mb_sm--0 mb_md--0">
                <h2>O que você ganha ao fazer parte da Nevoon?</h2>
                <p>
                  Conheça as vantagens que o serviço da Nevoon trás pra você,
                  <br />
                  venda mais imóveis com zero burocracia.
                </p>
              </div>
            </v-col>
          </v-row>
         
        <Service />
      </div>
    </div>    -->
    <br />
 
    <!-- PERGUNTAS   
    <div class=" mb--60 bg_color--1">
      <div class="portfolio-sacousel-inner" id="perguntas">
        <Perguntas />
      </div>
    </div>-->
    <!-- PERGUNTAS  -->

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
import Service from "../../components/service/Portfolio.vue";
import Perguntas from "../../components/about/About";
import Footer from "../../components/footer/Footer";

export default {
  components: {
    Header,
    Banner,
    CallToActionTwo,
    Service,
    Contador,
    Footer,
    Perguntas,
  },
  data() {
    return {};
  },
};
</script>
