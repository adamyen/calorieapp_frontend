const API_ROOT = 'http://localhost:8000/api';


export const APIURLS = {
    login: () => `${API_ROOT}/auth/signin`,
    signup: () => `${API_ROOT}/auth/signup`,
    // fetchPosts: (page=1, limit=25) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
    editProfile : () => `${API_ROOT}/users/edit`,
    editHistory : () => `${API_ROOT}/users/createhistory`,
    getHistory: (date,userId) => `${API_ROOT}/users/gethistory?id=${userId}&date=${date}`,
   
    userSearch: (searchText) => `${API_ROOT}/users/search/${searchText}`,
    // deletePost: (postId) => `${API_ROOT}/posts/destroy/${postId}`,
    // deleteComment: (commentId) => `${API_ROOT}/posts/destroycomment/${commentId}`   
}