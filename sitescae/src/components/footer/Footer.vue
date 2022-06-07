<template>
  <!-- Start Footer Style Two  -->
  <div
    class="footer-style-2 ptb--30 bg_image bg_image--1"
    data-black-overlay="6"
  >
    <div class="wrapper plr--50 plr_sm--20">
      <v-row align="center">
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="inner">
            <div class="logo text-center text-sm-left mb_sm--20">
              <router-link to="/#home"
                ><img height="40px" :src="logo" alt="Logo images"
              /></router-link>
            </div>
          </div> 
        </v-col> 
        <!-- End .col -->
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="inner text-center">
            <ul class="social-share rn-lg-size d-flex justify-center liststyle">
              <li v-for="(social, i) in socialList" :key="i">
                <a target="_blank" :href="social.url"
                  ><i class="fab" :class="social.icon"></i
                ></a>
              </li>
            </ul>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="12" cols="12">
          <div class="inner text-md-right text-center mt_md--20 mt_sm--20">
            <div class="text">
              <p>
                Copyright © {{ new Date().getFullYear() }} 
              </p>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </div>
  <!-- End Footer Style Two  -->
</template>

<script>
  export default {
    data() {
      return {
        logo: require("../../assets/images/logo/scae/logoscae.png"),
        socialList: [
          {
            icon: "fa-facebook-f",
            url: "https://www.facebook.com/scae.adm",
          },
          {
            icon: "fa-instagram-square",
            url: "https://www.instagram.com/scae.adm",
          },

          {
            icon: "fa-youtube",
            url: "https://www.youtube.com/channel/UCtcodK3IjGdg9SnsYu1TWaw",
          },
          {
            icon: "fa-whatsapp",
            url: "https://materiais.scae.adm.br/lp-whatsapp",
          },
          {
            icon: "fa-linkedin",
            url: "https://www.linkedin.com/company/scae-sistema-corporativo-de-administra%C3%A7%C3%A3o-empresarial/",
          }
          
        ],
      };
    },
  };
</script>
