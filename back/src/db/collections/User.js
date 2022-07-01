import { UserModel } from "../schemas/user";

class User {
    static create({ newUser }) {
        return UserModel.create(newUser);
    }

    static findByEmail({ email }) {
        return UserModel.findOne({ email });
    }

    static findById({ userId }) {
        return UserModel.findById(userId);
    }

    static update({ userId, toUpdate }) {
        return UserModel.findByIdAndUpdate(userId, toUpdate, { new: true });
    }

    static delete({ userId }) {
        return UserModel.findByIdAndDelete(userId);
    }
}

export { User };
