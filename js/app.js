let personal = {
  template: `
  <div>
  <h2>Données personnels</h2>
  Nom:  {{nom}}
  </div>
  `,
  props: ["nom"],
  data: function () {
    return {

      nom: null,

    }

  },
  methods: {


  }
};

let vm = new Vue({
  /*Création d'une instance de vue, et passage du code en option*/
  el: '#app',
  /*Sélecteur. Même syntaxe que le CSS*/
  data: {

    nom: null


  },

  components: {

    "personal-cmp": personal

  },
  methods: {




  }

});