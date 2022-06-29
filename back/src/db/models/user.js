import models from "./index";

class User {
    static create({ newUser }) {
        return models.User.create(newUser);
    }

    static findById({ __id }) {
        return models.User.findOne({ where: { __id } });
    }

    static findOne(where) {
        return models.User.findOne({ where });
    }

    static update({ __id, toUpdate }) {
        return models.User.update(toUpdate, { where: { __id } });
    }

    static delete({ __id }) {
        return models.User.destroy({ where: { __id } });
    }
}

export { User };
