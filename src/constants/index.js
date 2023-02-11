export const API_PREFIX = '/api/v1/';
export const API_URL = 'https://jsonplaceholder.typicode.com/';
export const BASE_API = {
    GET_USERS: API_URL + 'users',
    GET_POSTS: API_URL + 'posts',
}

export const ROUTE_URL = {
    HEALTH_CHECK: API_PREFIX + 'health',
    GET_USERS: API_PREFIX + 'users',
    GET_USER: API_PREFIX + 'users/:id',
    GET_POSTS: API_PREFIX + 'posts',
    GET_POST: API_PREFIX + 'posts/:id',
    UPDATE_POST: API_PREFIX + 'posts/:id',
    DELET_POST: API_PREFIX + 'posts/:id'
}