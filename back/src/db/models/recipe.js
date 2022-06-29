import models from "./index";

class Recipe {
    static create({ newRecipe }) {
        return models.Recipe.create(newRecipe);
    }

    static findById({ __id }) {
        return models.Recipe.findOne({ where: { __id } });
    }

    static findOne(where) {
        return models.Recipe.findOne({ where });
    }

    static update({ email, toUpdate }) {
        return models.Recipe.update(toUpdate, { where: { email } });
    }

    static delete({ __id }) {
        return models.Recipe.destroy({ where: { __id } });
    }
}

export { Recipe };
