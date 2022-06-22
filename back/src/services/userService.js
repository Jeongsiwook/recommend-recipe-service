import { User, Recipe } from "../db";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class userService {
    static async addUser({ name, email, password }) {
        const user = await User.findByEmail({ email });
        if (user) {
            return { errorMessage: "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요." };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: uuidv4(),
            name,
            email,
            password: hashedPassword,
        };

        return User.create({ newUser });
    }

    static async getUser({ email, password }) {
        const user = await User.findByEmail({ email });
        if (!user) {
            return { errorMessage: "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요." };
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return { errorMessage: "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요." };
        }

        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            return { errorMessage: "JWT_SECRET_KEY가 설정되지 않았습니다." };
        }

        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
        const id = user.id;
        const name = user.name;
        const description = user.description;

        return { token, id, email, name, description };
    }

    static async setUser({ userId, toUpdate }) {
        let user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다. 다시 한 번 확인해 주세요." };
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
            return { errorMessage: "해당 사용자는 가입 내역이 없습니다. 다시 한 번 확인해 주세요." };
        }

        return user;
    }

    static async deleteUser({ userId }) {
        const user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요." };
        }

        return User.deleteById({ userId });
    }

    static async addRecipe({ userId, title, ingredients, content }) {
        const newRecipe = { title, ingredients, content };
        return Recipe.create({ userId, newRecipe });
    }

    static async deleteRecipe({ recipeId }) {
        return Recipe.deleteById({ recipeId });
    }
}

export { userService };
