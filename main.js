// instantiate Vue 
let main = new Vue({
    // Where to attach
    // Only things within example can be changed 
    // # applies to IDs
    el: "#hero",
    mounted: function(){
        setInterval(this.changeGreeting, 1500)
    },
    // variables
    data: {
      index: 0,
      greeting: 'Hello',
      isCenter: false,
    },
  
    // functions
    methods: {
      changeGreeting: function() {
        this.index += 1;
        let greetings = ['Hello', 'Ciao', 'Salut', 'Hola', 'Privet', 'Nǐn hǎo'];
        greetings.push('Konnichiwa', 'Guten Tag', 'Olá', 'Anyoung', 'Ahlan');
        this.greeting = greetings[this.index % greetings.length];
      },

      centerText: function(){
        // toggle
        this.isCenter = !this.isCenter;
      }
    },
  })

  // instantiate Vue 
let modals = new Vue({
  // Where to attach
  // Only things within example can be changed 
  // # applies to IDs
  el: "#modals",
  mounted: function(){
      
  },
  // variables
  data: {
    modal1: false,
    modal2: false,
    modal3: false,
  },

  // functions
  methods: {

    modal1change: function() {
      this.modal1 = !this.modal1;
    },
    modal2change: function() {
      this.modal2 = !this.modal2;
    },
    modal3change: function() {
      this.modal3 = !this.modal3;
    }
  },
})