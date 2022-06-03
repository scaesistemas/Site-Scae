<template>
  <div>
    <v-expansion-panels
      accordion
      flat
      v-model="panel"
      mandatory
      class="about-expension-panels"
    >
      <v-expansion-panel v-for="(item, i) in accordionContent" :key="i">
        <v-expansion-panel-header hide-actions>{{
          item.title
        }}</v-expansion-panel-header> 
        <v-expansion-panel-content>
          {{ item.content }} 
        </v-expansion-panel-content>  
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panel: 0,
      accordionContent: [
        {
          title: "1. O que é a Nevoon?",
          content: `A Nevoon é uma plataforma digital que oferece uma solução digital para aproximar construtoras, corretores autônomos e imobiliárias, facilitando as transações comerciais entre seus usuários e os clientes representados por estes.`,
        },
        {
          title: "2. Para quem é a Nevoon?",
          content: `A Nevoon se destina para corretores, imobiliárias e construtores fecharem negócios imobiliários. As construtoras através de postagem do portfólio de seus imóveis e o controle das comissões, propostas aceitas, negadas e negociadas com milhares de corretores e imobiliárias que também poderão organizar seu próprio negócio de forma gratuita, postar seus próprios imóveis e negociar entre si.`,
        },
        {
          title: "3. O que os corretores podem fazer na Nevoon?",
          content: `Os corretores cadastram todos os imóveis que dispõem para negociação, como se fosse um anúncio. A partir daí, podem compartilhar no Whatsapp e redes sociais, tentam alcançar potenciais clientes. Eles podem deixar os imóveis anunciados disponíveis para que outros corretores, que também utilizam a Nevoon, comercializem os imóveis do anúncio. Na aba “meu espaço”, controlam suas comissões, pagamentos e recebimentos. Na agenda, cadastram seus interessados, seus clientes, e agendam compromissos. Eles também podem negociar e fazer negócios on-line diretamente com construtoras, imobiliárias ou outros corretores. Eles também terão a possibilidade de avaliar construtoras, imobiliárias e outros corretores pelas negociações que fizerem.`,
        },
        {
          title: "4. O que as Imobiliárias podem fazer na Nevoon?",
          content: ` As mesmas funcionalidades dos corretores, criando grupos de corretores, sob a gestão e supervisão do responsável pela imobiliária. Vão poder avaliar construtoras, corretores e outras imobiliárias pelas negociações que fizerem.`,
        },
        {
          title: "5. O que as Construtoras podem fazer na Nevoon?",
          content: `As construtoras podem anunciar seus empreendimentos, divulgando de uma só vez a um grupo de corretores, sem necessidade de contratos ou compromissos preliminares. Elas também poderão fazer anúncios personalizados e direcionados aos corretores com o perfil mais adequado a negociar seu empreendimento, conforme as avaliações dadas pelas negociações feitas anteriormente na plataforma. Vão poder avaliar corretores e imobiliárias pelas negociações que fizerem.  `,
        },
        {
          title: "6. Quais as vantagens dos usuários da Nevoon ao utilizar a plataforma?",
          content: `Os usuários terão divulgação ampla e imediata dos produtos/imóveis. O usuário poderá escolher fazer negócios ou não com outros usuários, pelo histórico que estes possuem na plataforma. O usuário encontra segurança das relações garantidas pela plataforma. As operações são criptografadas, ou seja, são tidas no sigilo completo, não ficando disponíveis aos demais usuários. `,
        },
        {
          title: "7. Quanto custa se cadastrar e utilizar a Nevoon? ",
          content: `O cadastro e a utilização da plataforma é gratuito* com direito a 10gb de armazenamento (o que corresponde a cerca de 1.200 anúncios).*Aos usuários que conseguirem a meta de indicação de dois novos usuários.  `,
        },
        {
          title: "8. Quanto custa anunciar um imóvel na Nevoon? ",
          content: `A divulgação de um imóvel cadastrado aos demais usuários Nevoon é gratuito à todos os usuários. As construtoras irão dispor de um canal especial de atendimento, onde poderão personalizar seus anúncios direcionando ao perfil do corretor, região onde atua e avaliação que possuir no site.  `,
        },
        {
          title: "9. Como se tornar um corretor para usar a Nevoon? ",
          content: ` Para se tornar corretor de imóveis, segundo os requisitos do CRECI ( Conselho Regional dos Corretores de Imóveis) é necessário fazer um dos seguintes cursos: a) curso técnico com Transação Imobiliária, em nível técnico; b) curso superior em Gestão de Negócios Imobiliários, em nível superior. O Candidato ainda deve fazer uma avaliação e se cadastrar junto ao CRECI. Uma vez cadastrado no CRECI, poderá solicitar o cadastro na Nevoon. `,
        },
        {
          title: "10. Como vender mais imóveis usando a Nevoon? ",
          content: `O usuário cadastrado já está pronto para negociar com todos os demais usuários. Basta o usuário divulgar os imóveis disponíveis para negociar, informando a comissão que pretende pagar. Além disso, o usuário pode encontrar o imóvel anunciado por outro usuário, ideal para seu cliente-comprador e ver se a comissão oferecida te atende. Faça a proposta on line, feche a compra através da Nevoon e a comissão estará garantida.  `,
        },
      ],
    };
  },
};
</script>
