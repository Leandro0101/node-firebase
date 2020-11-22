import firebase from 'firebase'
import firebaseConfig from '../../config/firebase'
export const appFirebase = firebase.initializeApp(firebaseConfig);
class Firebase {

    async auth(req, res) {
        const { email, password } = req.body
        try {
            const auth = await appFirebase.auth().signInWithEmailAndPassword(email, password)

            return res.json(auth)
        } catch (error) {
            return res.json(error)
        }
    }

    async signOut(req, res) {
        try {
            await appFirebase.auth().signOut()

            return res.json('successfully logged out')
        } catch (error) {
            return res.json(error)
        }
    }
}

export default new Firebase()