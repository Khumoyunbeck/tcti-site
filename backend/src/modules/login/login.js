module.exports = {
    POST: async(req, res) => {
        try {
            const {
                email,
                password
              } = req.body;
              if (!email || !password) {
                res.render('./admin/login', {
                  title: 'Admin',
                  layout: './admin/layout'
                })
              } else if (email == 'co_com_90@mail.ru' && password == "parol123") {
                const token = {
                  token: 'tkti_admin777'
                }
                res.send(token)
              } else {
                res.sendStatus(404)
              }
        } catch(err) {
            console.log(err.message)
        }
    }
}