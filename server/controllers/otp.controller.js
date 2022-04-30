import otpService from '../service/table.service.js'
import { authenticator } from 'otplib';
import bot from '../components/telegram/index.js';
const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
class OtpController {
  async send(req, res, next) {
    try {
      const token = authenticator.generate(secret);
      try {
        // const isValid = authenticator.check(token, secret);
        // // or
        // const isValid = authenticator.verify({ token, secret });
        const adminID = 223971340
        bot.sendMessage(adminID, `<a href=\"https://webapp.amsvlad.ru/api/otp?verify=${token}\">Авторизоватся</a>`,{parse_mode : "HTML"})
      } catch (err) {
        // Possible errors
        // - options validation
        // - "Invalid input - it is not base32 encoded string" (if thiry-two is used)
        console.error(err);
      }
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }
}


export default new OtpController();