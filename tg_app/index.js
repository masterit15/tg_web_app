const TelegramBot = require('node-telegram-bot-api');
const token = '5311271693:AAEBXZfBZ1XUghjSXvqHgERSveOc8U1Liq8';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
  var options = { 
    reply_markup: JSON.stringify({ 
      keyboard: [ 
        [{ text: 'Мы будем делать бабки', web_app: {url:'https://webapp.amsvlad.ru' }}], 
        [{ text: 'Карта', }], 
        [{ text: 'Контакты', }] 
      ],
      
    }) 
  }; 
  bot.sendMessage(msg.chat.id, "Добро пожаловать в наш магазин!", options);

});
bot.on('message', (msg) => {
  console.log(msg);
  const menu = "Меню";
  const maps = "Карта";
  const contact = "Контакты";
  if (msg.text.includes(menu)) {
    bot.sendMessage(msg.chat.id, "Вы вошли Главная");
  }
  
  if (msg.text.includes(maps)) {
    bot.sendLocation(msg.chat.id,43.0199688,44.6816363);
  }
  
  if (msg.text.includes(contact)) {
    bot.sendMessage(msg.chat.id, "Вы вошли Контакты");
  }
});
bot.answerWebAppQuery('AAEMiFkNAAAAAAyIWQ3vo4tZ', {}, ['options']).then(res=>{
  console.log(res);
})

