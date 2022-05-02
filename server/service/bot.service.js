import { Crypto } from '@peculiar/webcrypto'
import bot from '../components/telegram/index.js';
import {io} from '../socket.js'
import Clients from '../clients.js';
const client = new Clients()
const crypto = new Crypto();
const APP_BASE_URL = "https://webapp.amsvlad.ru/"

bot.onText(/\/start/, (msg) => {
  var options = {
    reply_markup: JSON.stringify({
      keyboard: [
        [{ text: 'Авторизация', web_app: { url: APP_BASE_URL } }],
        [{ text: 'Карта', }],
        [{ text: 'Контакты', }]
      ],

    })
  };
  bot.sendMessage(msg.chat.id, "Добро пожаловать в наш магазин!", options);
});
async function validate(data, botToken) {
  const encoder = new TextEncoder()

  const checkString = Object.keys(data)
    .filter((key) => key !== "hash")
    .map((key) => `${key}=${data[key]}`)
    .sort()
    .join("\n")

  const secretKey = await crypto.subtle.importKey("raw", encoder.encode('WebAppData'), { name: "HMAC", hash: "SHA-256" }, true, ["sign"])
  const secret = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(botToken))
  const signatureKey = await crypto.subtle.importKey("raw", secret, { name: "HMAC", hash: "SHA-256" }, true, ["sign"])
  const signature = await crypto.subtle.sign("HMAC", signatureKey, encoder.encode(checkString))

  const hex = [...new Uint8Array(signature)].map(b => b.toString(16).padStart(2, '0')).join('')
  // console.log('data.hash',data.hash);
  // console.log('hex',hex);
  return data.hash === hex
}
// bot.on('callback_query', function (msg) {
//   console.log(msg);
// });
bot.on('pre_checkout_query', (msg) => {
  console.log('pre_checkout_query',msg);
  bot.answerPreCheckoutQuery(msg.id, true)
}) // ответ на предварительный запрос по оплате

// bot.on('successful_payment', async (msg, next) => { // ответ в случае положительной оплаты
//   console.log('successful_payment',msg);
//   bot.sendMessage(msg.chat.id, "Спасибо заказ принят");
// })
bot.on('pre_checkout_query', (msg) => {
  console.log('pre_checkout_query',msg);
  bot.answerPreCheckoutQuery(msg.id, true)
}) // ответ на предварительный запрос по оплате
bot.on('successful_payment', async (msg, next) => { // ответ в случае положительной оплаты
  console.log('successful_payment',msg);
  bot.sendMessage(msg.chat.id, "Спасибо заказ принят");
  let user = client.getClientTg(msg.chat.id)
  io.to(user.socket).emit('sendOrders', msg);
})
bot.on('message', async (msg) => {
  console.log('message',msg);
  const menu = "Меню";
  const maps = "Карта";
  const contact = "Контакты";
  if (msg.text?.includes(menu)) {
    bot.sendMessage(msg.chat.id, "Вы вошли Главная");
  }

  if (msg.text?.includes(maps)) {
    bot.sendLocation(msg.chat.id, 43.0199688, 44.6816363);
  }

  if (msg.text?.includes(contact)) {
    bot.sendMessage(msg.chat.id, "Вы вошли Контакты");
  }
});
class BotService {
  constructor() {
    this.lastUpdateId = 0;
  }
  async login(initData) {
    const data = this.transformInitData(initData);
    const isOk = await this.validate(data, process.env.BOT_TOKEN);
    if (!isOk) {
      return;
    }
    const user = JSON.parse(data.user)
    console.log(user.id);
  }
  sendInvoice(invoiceParam){
    const {id, prices} = invoiceParam
    const title = 'Готовая кухня'
    const description = 'Готовая кухня на заказ'
    const payload = `${id}_${Date.now()}_pay`
    const providerToken = process.env.STRIPE_API_SBER
    const startParameter = 'get_access'
    const currency = "RUB"
    const option = {
      provider_data: {name: 'sber'},
      need_phone_number: true,
      // need_shipping_address: true,
      need_name: true,
      // is_flexible: true,
      photo_url: 'https://kartinkin.net/uploads/posts/2021-03/thumbs/1617150508_2-p-burger-krasivo-2.jpg',
      photo_width: 500, // Ширина фото
      photo_height: 281, // Длина фото
    }
    bot.sendInvoice(id, title, description, payload, providerToken, startParameter, currency, prices, option);
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
  transformInitData(initData) {
    return Object.fromEntries(new URLSearchParams(initData));
  }
  async validate(data, botToken) {
    const encoder = new TextEncoder()

    const checkString = Object.keys(data)
      .filter((key) => key !== "hash")
      .map((key) => `${key}=${data[key]}`)
      .sort()
      .join("\n")

    const secretKey = await crypto.subtle.importKey("raw", encoder.encode('WebAppData'), { name: "HMAC", hash: "SHA-256" }, true, ["sign"])
    const secret = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(botToken))
    const signatureKey = await crypto.subtle.importKey("raw", secret, { name: "HMAC", hash: "SHA-256" }, true, ["sign"])
    const signature = await crypto.subtle.sign("HMAC", signatureKey, encoder.encode(checkString))

    const hex = [...new Uint8Array(signature)].map(b => b.toString(16).padStart(2, '0')).join('')
    // console.log('data.hash',data.hash);
    // console.log('hex',hex);
    return data.hash === hex
  }
}
export default new BotService();