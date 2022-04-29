const axios = require('axios')
const { Crypto }  = require('@peculiar/webcrypto');
const crypto = new Crypto();

const BOT_API_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
const APP_BASE_URL = "https://webapp.amsvlad.ru/"; // Used to tell bot what page to open
const ApiError = require('../exceptions/api-error');

class BotService {
  constructor(){
    this.lastUpdateId = 0;
  }
  async login(initData) {
    console.log(initData);
    const data = transformInitData(initData);
    const isOk = await validate(data, process.env.BOT_TOKEN);
    if (!isOk) {
      return;
    }
    if (req.body.with_webview) {
      makeBotRequest("answerWebAppQuery", {
        web_app_query_id: data.query_id,
        result: {
          type: 'photo',
          id: '42',
          photo_url: 'https://picsum.photos/600/300.jpg',
          thumb_url: 'https://picsum.photos/600/300.jpg',
          reply_markup: {
            inline_keyboard: [[
              {
                text: 'Open',
                web_app: { url: APP_BASE_URL + "demo.html" },
              },
            ]],
          }
        }
      })
    } else {
      makeBotRequest("answerWebAppQuery", {
        web_app_query_id: data.query_id,
        result: {
          type: 'article',
          id: '1',
          title: 'Title',
          input_message_content: {
            message_text: 'Message sent from webview',
          }
        }
      })
    }
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
  transformInitData() {
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

    return data.hash === hex
  }
  
  checkUpdates() {
      makeBotRequest("getUpdates", {
          offset: this.lastUpdateId + 1,
          limit: 1,
      }).then(data => {
          if (data.ok) {
              if (data.result.length > 0) {
                  const update = data.result[0];
                  this.lastUpdateId = update.update_id;
                  console.log(update);
                  const message = update.message;
                  const chatId = message.chat.id;
                  const messageId = message.message_id;
                  if (message.web_app_data) {
                      const { button_text, data } = message.web_app_data;
                      makeBotRequest("sendMessage", {
                          chat_id: chatId,
                          text: `Got data from button "${button_text}": \n\`${data}\``,
                          parse_mode: "Markdown",
                          reply_to_message_id: messageId,
                      });
                      return;
                  }
  
                  if (message.via_bot) return; // Ignore our messages
  
                  if (message.text === "/demo") {
                      sendDemoButton(chatId);
                  } else if (message.text === "/simple") {
                      sendSimpleModeButton(chatId);
                  } else {
                      makeBotRequest("sendMessage", {
                          chat_id: chatId,
                          text: "Supported commands: /demo, /simple",
                          reply_to_message_id: messageId,
                      });
                  }
              } else {
                  this.lastUpdateId = 0;
              }
          }
      }).catch(err => {
          console.log('eeeeeerrr',err);
      });
  }
  
  
}
function makeBotRequest(method, params) {
  return new Promise((resolve, reject) => {
      const url = BOT_API_URL + "/" + method;
      axios.post(url, JSON.stringify(params)).then(response => {
          if (response.status !== 200) {
              reject(`${url.replace(process.env.BOT_TOKEN, "TOKEN")} with parameters ${JSON.stringify(params)} responded with code ${response.status}`);
          }
          resolve(response.data);
      })
      .catch(err => {
          reject(err);
      });
  });
}
module.exports = new BotService();