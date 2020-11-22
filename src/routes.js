import express from 'express'
import firebase from './app/services/Firebase'
import auth from './app/middlewares/auth'
import homeController from './app/controllers/HomeController'
const routes = express.Router()
routes.post('/authentication', firebase.signInWithEmailAndPassword)
routes.post('/signout', firebase.signOut)
routes.post('/create', firebase.createUserWithEmailAndPassword)
routes.put('/emailVerification', auth, firebase.sendEmailVerification)

routes.get('/test', auth, homeController.test)
export default routes