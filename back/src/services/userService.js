import { User } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User as UserModel } from "../db/models/user";

class userService {
    static async addUser({ name, email, password }) {
        const user = await User.findByEmail({ email });
        if (user) {
            return { errorMessage: "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요." };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            name,
            email,
            password: hashedPassword,
        };

        // return User.create({ newUser });
        return UserModel.create({ newUser });
    }

    static async getUser({ email, password }) {
        // const user = await User.findByEmail({ email });
        const user = await UserModel.findOne({ email });
        if (!user) {
            return { errorMessage: "해당 이메일은 가입 내역이 없습니다." };
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return { errorMessage: "비밀번호가 일치하지 않습니다." };
        }

        const { id, name, description } = user;
        const token = jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY || "secret-key");

        return user;
    }

    static async setUser({ userId, toUpdate }) {
        // let user = await User.findById({ userId });
        let user = await UserModel.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다." };
        }

        const { name, description } = toUpdate;
        if (!name) name = user.name;
        if (!description) description = user.description;

        const newValues = { name, description };

        return User.update({ userId, newValues });
    }

    static async getUserInfo({ userId }) {
        const user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다." };
        }

        return user;
    }

    static async deleteUser({ userId }) {
        const user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다." };
        }

        return User.deleteById({ userId });
    }

    static addRecipe({ userId, title, ingredients, content }) {
        const newRecipe = { title, ingredients, content };
        return Recipe.create({ userId, newRecipe });
    }

    static deleteRecipe({ recipeId }) {
        return Recipe.deleteById({ recipeId });
    }
}

export { userService };
