import models from "./index";

class Recipe {
    static create({ newRecipe }) {
        return models.Recipe.create(newRecipe);
    }

    static findById({ id }) {
        return models.Recipe.findOne({ where: { id } });
    }

    static findOne(where) {
        return models.Recipe.findOne({ where });
    }

    static update({ email, toUpdate }) {
        return models.Recipe.update(toUpdate, { where: { email } });
    }

    static delete({ id }) {
        return models.Recipe.destroy({ where: { id } });
    }
}

export { Recipe };
