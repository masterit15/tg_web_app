import { hotp } from 'otplib';
import 'dotenv/config'
const counter = 10
class Otp {
  token(){
    return hotp.generate(process.env.OTP_SECRET, counter)
  }
  isValid(otp){
    return hotp.check(otp, process.env.OTP_SECRET, counter);
  }
}
export default new Otp()