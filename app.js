
const app = Vue.createApp({
    data() {
      return {
        count: 0,
      };
    },
    
    methods: {
      add() {
        this.count++;
      //   if(this.count > )
      },
      minus() {
          if(this.count > 0){
              this.count--;
  
          }
  
      },
      
    },
  });
  
  app.mount("#app");
  
  
  
  
  
  
  // const App = Vue.createApp({
  //     data(){
  //         return{
  //             message: 'Vue is easier then plain javascript and i think he is right ',
  //             message2: 'Yung Master Matthew said',
  //             num: 50/5
  //         }
  //     }
  // })
  
  // App.mount('#app')
  
  
  
  
  
  
  