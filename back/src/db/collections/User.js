import { UserModel } from "../schemas/user";

class User {
    static create({ newUser }) {
        return UserModel.create(newUser);
    }

    static findByEmail({ email }) {
        return UserModel.findOne({ email });
    }

    static findById({ userId }) {
        return UserModel.findOne({ id: userId });
    }

    static update({ userId, newValues }) {
        return UserModel.findOneAndUpdate(
            { id: userId }, //
            { $set: newValues },
            { new: true },
        );
    }

    static async deleteById({ userId }) {
        const deleteResult = await UserModel.deleteOne({ id: userId });
        const isDataDeleted = deleteResult.deletedCount === 1;
        return isDataDeleted;
    }
}

export { User };
