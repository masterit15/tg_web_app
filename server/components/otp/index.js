import { totp } from 'otplib';
import 'dotenv/config'
totp.resetOptions({
  step: 30,
})
class Otp {
  token(){
    return totp.generate(process.env.OTP_SECRET)
  }
  isValid(otp){
    return totp.check(otp, process.env.OTP_SECRET);
  }
}
export default new Otp()