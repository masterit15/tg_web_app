import otpService from '../service/table.service.js'
import otp from '../components/otp/index.js';
import bot from '../components/telegram/index.js';
class OtpController {
  async send(req, res, next) {
    try {
        const adminID = 223971340
        bot.sendMessage(adminID, `<a href=\"https://webapp.amsvlad.ru/api/otp?verify=${otp.token()}\">Авторизоватся</a>`,{parse_mode : "HTML"})
      return res.json(otp.token());
    } catch (e) {
      next(e);
    }
  }
  verify(req,res,next){
    try {
      const {otpvalue} = req.body
      const isValid = otp.isValid(otpvalue)
      // // or
      // const isValid = authenticator.verify({ token, secret });
      return res.json({success: isValid});
    } catch (e) {
      next(e);
    }
  }
}


export default new OtpController();