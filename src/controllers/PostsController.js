
import {BASE_API} from '../constants'
class PostsController {
    
    static getPosts(req, res) {
        const url = BASE_API.GET_POSTS;
        console.log('API', url)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }
    static getPost(req, res) {
        const url = BASE_API.GET_POSTS + '/' + req.params['id'];
        console.log('API', url)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static createPost(req, res) {
        //req.body => this can be modified based on required fields
        let payload = {
            title: req.body.title,
            body: req.body.body,
            userId: req.body.userId,
          }
        let options = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
            'Content-type': 'application/json',
            }
        }
        const url = BASE_API.GET_POSTS;
        console.log('API', url)
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }


    static updatePost(req, res) {
        //req.body => this can be modified based on required fields
        const url = BASE_API.GET_POSTS + '/' + req.params['id'];
        let payload = {
            id: req.params['id'], 
            title: req.body.title,
            body: req.body.body,
            userId: req.body.userId,
          }
        let options = {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
            'Content-type': 'application/json',
            }
        }
        console.log('updateUser API', url)
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static deletePost(req, res) {
        //req.body => this can be modified based on required fields
        const url = BASE_API.GET_POSTS + '/' + req.params['id'];
        let options = {
            method: 'DELETE', //PUT
            headers: {
            'Content-type': 'application/json',
            }
        }
        console.log('updateUser API', url)
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }


    
}
export default PostsController;