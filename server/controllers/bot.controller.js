const botService = require('../service/bot.service');
setInterval(botService.checkUpdates, 4000);
class BotController {
    async login(req, res, next) {
        try {
            const {initData} = req.body;
            if (!initData) {
                res.sendStatus(400);
                return;
            }
            const authData = await botService.login(initData);
            return res.json(authData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const authData = await botService.logout();
            return res.json({authData, success: true});
        } catch (e) {
            next(e);
        }
    }
}


module.exports = new BotController();