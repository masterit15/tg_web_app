import botService from '../service/bot.service.js'
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

    async sendInvoice(req, res, next){
        try {
            const {invoiceData} = req.body;
            if (!invoiceData) {
                res.sendStatus(400);
                return;
            }
            const authData = await botService.sendInvoice(invoiceData);
            return res.json(authData);
        } catch (e) {
            next(e);
        }
    }
}


export default new BotController();