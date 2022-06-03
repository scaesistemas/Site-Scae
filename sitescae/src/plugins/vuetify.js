import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);



export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f6631e',
                success: '#414042',
                accent: '#ee9613',
                teal: '#26B0A1',
                warning: '#FF8F3C',
                error: '#FF585A',
                cyan: '#42D3D5',
            },
        },
    },
    icons: {
        iconfont: 'mdi', 
    },
});

//laranja escuro = f6631e
//amarelo = ee9613
//grafite = 414042