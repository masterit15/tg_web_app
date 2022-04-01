export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    SOCKET_clientJoined({}, data){
      let client = localStorage.getItem('client')
      if(!client){
        localStorage.setItem('client', JSON.stringify({id: data[0], lastDate: new Date()}))
      }else{
        client = JSON.parse(client)
        // парсим их с помощью нативного JS
        let a = Date.parse(client.lastDate);
        let b = Date.parse(new Date());
        // получаем количество дней между датами
        let days = Math.floor(Math.abs(b-a)/(1000*60*60*24)) ;
        console.log(`Спасибо что вернулись к нам, вы не посещали нас ${days} дней!`);
      }
      
    }
  }
}