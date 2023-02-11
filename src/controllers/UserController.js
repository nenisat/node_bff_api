
import {BASE_API} from '../constants'
class UserController {
    static healthCheck(req, res) {
        res.json('works well')
    }
    static getUsers(req, res) {
        const url = BASE_API.GET_USERS;
        console.log('getUsers API', url)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }
    static getUser(req, res) {
        const url = BASE_API.GET_USERS + '/' + req.params['id'];
        console.log('getUser API', url)
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }

    static createUser(req, res) {
        //req.body => this can be modified based on required fields
        let options = {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: {
            'Content-type': 'application/json',
            }
        }
        const url = BASE_API.GET_USERS;
        console.log('getUsers API', url)
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }


    static updateUser(req, res) {
        //req.body => this can be modified based on required fields
        const url = BASE_API.GET_USERS + '/' + req.params['id'];
        let options = {
            method: 'PUT',
            body: JSON.stringify(req.body),
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

    static deleteUser(req, res) {
        //req.body => this can be modified based on required fields
        const url = BASE_API.GET_USERS + '/' + req.params['id'];
        let options = {
            method: 'DELETE', //PUT
            body: JSON.stringify(req.body),
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
export default UserController;