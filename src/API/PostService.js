import axios from 'axios';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

    const response = await axios.get(POSTS_URL, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getById(id) {
    const POST_BY_ID = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const response = await axios.get(POST_BY_ID);
    return response;
  }

  static async getCommentsByPostId(id) {
    const COMMENTS = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

    const response = await axios.get(COMMENTS);
    return response;
  }
}
