class HomeController {
    test(req, res) {

        return res.json({ message: 'Ok' })
    }
}
export default new HomeController()