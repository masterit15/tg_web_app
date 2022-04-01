const UserModel = require('../model/users.model');
const bcrypt = require('bcrypt');
const tokenService = require('./token.service');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(name, login, avatar, password, permission) {
        const hashPassword = await bcrypt.hash(password, 3);
        const candidate = await UserModel.findOne({where: {login}, raw: true})
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с таким логином "${login}" уже существует`)
        }
        const user = await UserModel.create({name, login, avatar, password, password: hashPassword, permission})
        return {user}
    }


    async login(login, password) {
        const hashPassword = await bcrypt.hash('admin123', 3);
        const admin = await UserModel.findOne({where: {login: 'admin'}, raw: true})
        if (!admin) {
            await UserModel.create({login: 'admin', name: 'admin', password: hashPassword, permission: 'Руководитель'})
        }
        const user = await UserModel.findOne({where: {login}, raw: true})
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким логином не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const tokens = tokenService.generateTokens({...user});

        await tokenService.saveToken(user.id, tokens.refreshToken);
        return {...tokens, user,success: true}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findOne({where: {id: userData.id}, raw: true});
        const tokens = tokenService.generateTokens({...user});

        await tokenService.saveToken(user.id, tokens.refreshToken);
        return {...tokens, user}
    }

    async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }
}

module.exports = new UserService();