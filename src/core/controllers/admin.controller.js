class AdminController{
    static async index(req, res) {
        return res.render('pages/dashboard/overview')
    }
}

module.exports = AdminController