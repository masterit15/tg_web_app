const webpush = require('web-push')
require('dotenv').config()

webpush.setVapidDetails('mailto:masterit15@yandex.ru', process.env.WebPushPublicKey, process.env.WebPushPrivatKey);

export default webpush