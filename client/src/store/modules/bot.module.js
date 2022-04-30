import TWA from "@/bot";
import $api from "@/api"
console.log(TWA);
export default {
  state: {
    // cart: []
  },
  getters: {
    // cart: (state) => state.cart
  },
  mutations: {
  },
  actions: {
    sendMessageToBot({dispatch}, text){
      if (dispatch('byteLength', text) > 4096) {
        return alert('Text is too long');
      }
      const res = $api.post('/bot/login', text)
      TWA.sendData(text);
    },
    authBot({dispatch}, initData){
      if (dispatch('byteLength', initData) > 4096) {
        return alert('Text is too long');
      }
      const res = $api.post('/bot/login', {initData})
      TWA.sendData('eeeeee');
    },
    //  отправить счет на оплату
    sendInvoice({}, param){
      const initDataUnsafe = TWA.initDataUnsafe || {}
      // if(initDataUnsafe.length > 0){
        let user = {
                    id: 223971340,
                    first_name: "Shalva",
                    last_name: "",
                    language_code: "ru"
                  }//JSON.stringify(initDataUnsafe, null, 2).user
        // const params = {prices: [...param], ...user}
        // console.log(params);
        $api.post('/bot/sendinvoice', {invoiceData: {prices: [...param], ...user}})
      // }

    },
    // проверяем размер текста в байтах
    byteLength(str) {
      if (window.Blob) {
        try { return new Blob([str]).size; } catch (e) { }
      }
      var s = str.length;
      for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s += 2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--;
      }
      return s;
    }
  }
}