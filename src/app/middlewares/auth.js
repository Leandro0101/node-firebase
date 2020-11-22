import { appFirebase } from '../services/Firebase'
export default (req, res, next) => {
    appFirebase.auth().onAuthStateChanged(user => {
        if (!user) {
            return res.json({ error: 'without permission' })
        }
        next()
    })
}