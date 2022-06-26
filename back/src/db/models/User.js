import models, { Sequelize } from "./index.js";

class UserModel {
    static create({ newUser }) {
        return models.User.create(newUser);
    }

    static findById({ userId }) {
        return models.User.findOne({ where: { __id: userId } });
    }

    static async findAndUpdate({ email, userId, fieldToUpdate }) {
        if (userId) {
            await models.User.update(fieldToUpdate, { where: { __id: userId } });
            return models.User.findOne({ where: { __id: userId } });
        }

        await models.User.update(fieldToUpdate, { where: { email: email } });
        return models.User.findOne({ where: { email: email } });
    }

    static delete({ userId }) {
        return models.User.destroy({ where: { __id: userId } });
    }
}

export { UserModel };
