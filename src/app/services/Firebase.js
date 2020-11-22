import firebase from 'firebase'
import firebaseConfig from '../../config/firebase'
export const appFirebase = firebase.initializeApp(firebaseConfig);
class Firebase {

    async signInWithEmailAndPassword(req, res) {
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

    async createUserWithEmailAndPassword(req, res) {
        const { email, password } = req.body

        try {
            const user = await appFirebase.auth().createUserWithEmailAndPassword(email, password)

            return res.json(user)
        } catch (error) {
            return res.json(error)
        }
    }

    async sendEmailVerification(req, res) {
        const user = appFirebase.auth().currentUser

        try {
            await user.sendEmailVerification()
            return res.status(200).json({ message: `Verification email sended for ${user.email}` })
        } catch (error) {
            return res.status(500).json(error)
        }

    }
}

export default new Firebase()