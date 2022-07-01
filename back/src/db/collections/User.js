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

    static update({ userId, newValues }) {
        return UserModel.findByIdAndUpdate(
            userId, //
            { $set: newValues },
            { new: true },
        );
    }

    static async deleteById({ userId }) {
        const deleteResult = await UserModel.deleteById(userId);
        const isDataDeleted = deleteResult.deletedCount === 1;
        return isDataDeleted;
    }
}

export { User };
