const app = Vue.createApp({
    data() {
      return {
        count: 0
      }
    },
    
    methods: {
      add() {
        this.count++
      },
      minus() {
          if(this.count > 0){
              this.count--;
  
          }
  
      },
      
    },
  });
  
  app.mount("#app");