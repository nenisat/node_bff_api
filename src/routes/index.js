import express from 'express';
import { ROUTE_URL } from '../constants';
import UserController from '../controllers/UserController';
import PostsController from '../controllers/PostsController';
const router = express.Router();

router.get(ROUTE_URL.HEALTH_CHECK, UserController.healthCheck);

/* Users */
router.get(ROUTE_URL.GET_USERS, UserController.getUsers);
router.get(ROUTE_URL.GET_USER, UserController.getUser);
router.post(ROUTE_URL.GET_USERS, UserController.createUser);
router.put(ROUTE_URL.GET_USER, UserController.updateUser);
router.delete(ROUTE_URL.GET_USER, UserController.deleteUser);

/* Posts */
router.get(ROUTE_URL.GET_POSTS, PostsController.getPosts);
router.get(ROUTE_URL.GET_POST, PostsController.getPost);
router.post(ROUTE_URL.GET_POSTS, PostsController.createPost);
router.put(ROUTE_URL.UPDATE_POST, PostsController.updatePost);
router.delete(ROUTE_URL.DELET_POST, PostsController.deletePost);

export default router;
