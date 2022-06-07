<template>
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
                    <Servicetwo />
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </div> 
</template>

<script>
import Servicetwo from "../../components/service/PortfolioTwo.vue";

export default {
  components: {
    Servicetwo
  },
  data() {
    return {
      portfolioContent: [
        {
          src: require("../../assets/images/portfolio/portfolio-1.jpg"),
          meta: "Development",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-2.jpg"),
          meta: "Html",
          title: "Getting tickets to the big show",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-3.jpg"),
          meta: "Graphic",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-4.jpg"),
          meta: "Freelancer",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-5.jpg"),
          meta: "Freelancer",
          title: "The Language of Developer",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-6.jpg"),
          meta: "Freelancer",
          title: "You can see your Portfolio",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-7.jpg"),
          meta: "App Development",
          title: "The Language of Developer",
        },
        {
          src: require("../../assets/images/portfolio/portfolio-8.jpg"),
          meta: "Freelancer",
          title: "You can see your Portfolio",
        },
      ],
    };
  },
};
</script>
