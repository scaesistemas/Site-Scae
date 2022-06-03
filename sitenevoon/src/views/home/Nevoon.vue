<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img
        height="40px"
        slot="logo"
        src="../../assets/images/logo/logonevoon.png"
        class="logo-light"
      />
      <img
        slot="logo-dark"
        src="../../assets/images/logo/logonevoon.png"
        class="logo-dark"
      />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area" id="home">
      <div
        class="
          slide slide-style-2
          slider-paralax
          d-flex
          align-center
          justify-center
          bg_image bg_image--32
        "
        data-black-overlay="4"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            NEVOON
          </h1>
          <p slot="description" class="description">
            conectando construtoras, corretores e imobiliárias.
          </p>
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->
    <br /><br /><br /><br />

    <!-- CORRETOR  -->
    <div
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
            <h2 class="fontWeight500">Corretores</h2>
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
    </div>
    <!-- CORRETOR -->

    <!-- CONTADOR -->
    <div
      class="rn-counterup-area pt_sm--50 pt--60 pt_md--50 pb--120 bg_color--1"
    >
      <v-container>
        <Contador />
      </v-container>
    </div>
    <!-- FINAL CONTADOR -->

    <!-- CONSTRUTORA  -->
    <div
      class="
        call-to-action-wrapper call-to-action-two
        bg_image bg_image--33
        text-white-wrapper
        ptb--100
        ptb_lg--80
        ptb_md--80
        ptb_sm--80
      "
      id="construtora"
    >
      <v-container>
        <CallToActionTwo />
      </v-container>
    </div>
    <!--FINAL CONSTRUTORA  -->

    <!-- IMOBILIARIA  pt_sm--50 pt--60 pt_md--50 pb--120-->
    <div
      class="rn-content-box-area rn-content-box-style--1 bg_color--1 pt--50  pb--50"
      id="imobiliaria"
    >
      <v-row class="row--0" align="center">
        <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
          <div class="content">
            <p class="subtitle"></p>
            <h2 class="fontWeight500">Imobiliárias</h2>
            <p>
              Disponibilize seu portifólio para milhares de corretores, crie
              grupos exclusivos e gerencie seu negócio
            </p>
            <a
              class="rn-button-style--2 mt--10 mt_sm--30 mt_md--30"
              href="http://development.nevoon.com.br/cadastro"
              ><span>Entre para a Nevoon</span></a
            >
          </div>
        </v-col>
        <v-col lg="6" md="12" cols="12">
          <div class="thumbnail img">
            <img
              class="img"
              src="../../assets/images/featured/imobiliaria.jpg"
              alt="Featured Images"
            />
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- FINAL IMOBILIARIA  -->

    <!-- Start Portfolio Area -->
    <div class="rn-section-gap bg_color--1" id="vantagens">
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
    </div>
    <br />

    <!-- PERGUNTAS  -->
    <div class=" mb--60 bg_color--1">
      <div class="portfolio-sacousel-inner" id="perguntas">
        <Perguntas />
      </div>
    </div>
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
import Service from "../../components/service/Servico";
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
