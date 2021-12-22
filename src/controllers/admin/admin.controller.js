const AdminController = {}

AdminController.homePage = (req, res) => {
    console.log('adminpage',req.user)
    res.send("this home admin page")

}

module.exports = AdminController