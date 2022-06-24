import { UserModel } from "../schemas/user";

class User {
    static create({ newUser }) {
        return UserModel.create(newUser);
    }

    static findByEmail({ email }) {
        return UserModel.findOne({ email }).lean();
    }

    static findById({ userId }) {
        return UserModel.findOne({ id: userId }).populate("recipes").lean();
    }

    static async update({ userId, newValues }) {
        const filter = { id: userId };
        const update = { $set: newValues };

        return UserModel.findOneAndUpdate(filter, update, { new: true });
    }

    static async deleteById({ userId }) {
        const deleteResult = await UserModel.deleteOne({ id: userId });
        const isDataDeleted = deleteResult.deletedCount === 1;
        return isDataDeleted;
    }
}

export { User };
