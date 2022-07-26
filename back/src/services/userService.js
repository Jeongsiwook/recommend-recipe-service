import { User } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { User as UserModel } from "../db/models/user";

class userService {
    static async addUser({ name, email, password, description }) {
        const user = await User.findByEmail({ email });
        if (user) {
            return { errorMessage: "이 이메일은 현재 사용중입니다." };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            name,
            email,
            password: hashedPassword,
            description,
        };

        // return UserModel.create({ newUser });
        return User.create({ newUser });
    }

    static async getUser({ email, password }) {
        // const user = await UserModel.findOne({ email });
        const user = await User.findByEmail({ email });
        if (!user) {
            return { errorMessage: "해당 이메일은 가입 내역이 없습니다." };
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return { errorMessage: "비밀번호가 일치하지 않습니다." };
        }

        const token = jwt.sign(
            { userId: user._id }, //
            process.env.JWT_SECRET_KEY || "secret-key",
        );
        const { _id, name, createdAt } = user;

        return { token, _id, email, name, createdAt };
    }

    static async getUserInfo({ userId }) {
        const user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다." };
        }

        return user;
    }

    static async setUser({ userId, toUpdate }) {
        // const user = await UserModel.findById({ userId });
        const user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다." };
        }

        return User.update({ userId, toUpdate });
    }

    static async deleteUser({ userId }) {
        const user = await User.findById({ userId });
        if (!user) {
            return { errorMessage: "가입 내역이 없습니다." };
        }

        return User.delete({ userId });
    }
}

export { userService };
