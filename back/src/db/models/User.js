import models, { Sequelize } from "./index";

class User {
    static create({ newUser }) {
        return models.Users.create(newUser);
    }

    static findById({ userId }) {
        return models.Users.findOne({ where: { __id: userId } });
    }

    static async findAndUpdate({ email, userId, fieldToUpdate }) {
        console.log(userId, email, fieldToUpdate);
        if (userId) {
            await models.Users.update(fieldToUpdate, { where: { __id: userId } });
            return models.Users.findOne({ where: { __id: userId } });
        }

        await models.Users.update(fieldToUpdate, { where: { email: email } });
        return models.Users.findOne({ where: { email: email } });
    }

    static async delete({ userId }) {
        return models.Users.destroy({ where: { __id: userId } });
    }
}

export { User };
