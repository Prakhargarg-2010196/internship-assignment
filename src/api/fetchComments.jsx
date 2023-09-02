const BASE_URL = `https://jsonplaceholder.typicode.com/`
// fetches the comments from the api
export const fetchComments = async () => {
    const response = await fetch(BASE_URL + 'comments');
    const data = await response.json();
    return data;
}
export const fetchCommentsByPostId = async (postId) => {
    const response = await fetch(`${BASE_URL}posts/${postId}/comments`);
    const data = await response.json();
    return data;
}