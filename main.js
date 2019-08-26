let modals = new Vue({
  el: "#modals",
  mounted: function(){
      
  },
  
  data: {
    modal1: false,
    modal2: false,
    modal3: false,
  },

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