export default async function ResultController(req, res) {

  let result = {
    "email" : req.body.email,
    "password" : req.body.password
  }

  res.render("result", result );
}