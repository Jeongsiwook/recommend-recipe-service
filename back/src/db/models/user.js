import models from "./index";

class User {
    static create({ newUser }) {
        return models.User.create(newUser);
    }

    static findById({ id }) {
        return models.User.findOne({ where: { id } });
    }

    static findOne(where) {
        return models.User.findOne({ where });
    }

    static update({ id, toUpdate }) {
        return models.User.update(toUpdate, { where: { id } });
    }

    static delete({ id }) {
        return models.User.destroy({ where: { id } });
    }
}

export { User };
