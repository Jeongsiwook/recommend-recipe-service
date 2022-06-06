import { Post } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class postService {
    static async addPost({ newUser }) {}
    static async getPost({ id }) {}
    static async getRank({ filter, page }) {}
    static async updatePost({ id, toUpdate }) {}
    static async deletePost({ id }) {}
}

export { postService };
