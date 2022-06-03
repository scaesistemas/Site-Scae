<template>
  <div>
      <!-- Start Contact Address Area  -->
    <div class="rn-contact-address-area rn-section-gap bg_color--5">
      <v-container>
        <ContactAddress />
      </v-container>
    </div>
    <!-- End Contact Address Area  -->

    <!-- Start Contact Area  --> 
    <div class="rn-contact-area rn-section-gap bg_color--1">
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              src="../assets/images/about/about-6.jpg"
              alt="trydo"
            />
          </Contact>
        </v-container>
      </div> 
    </div>
    <!-- End Contact Area  -->

     
    <!-- End Brand Area -->
    <Footer />
  </div>
</template>
 
<script>
  import ContactAddress from "../components/contact/ContactAddress";
  import Contact from "../components/contact/Contact";
  import Footer from "../components/footer/Footer";
  export default {
    components: { ContactAddress, Contact, Footer },
    data() {
      return {};
    },
  };
</script>

<style></style>
