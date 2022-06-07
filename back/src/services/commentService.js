import { Comment } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class CommentService {
    static async addComment({ newUser }) {}
    static async getComment({ id }) {}
    static async updateComment({ id, toUpdate }) {}
    static async deleteComment({ id }) {}
}

export { CommentService };
