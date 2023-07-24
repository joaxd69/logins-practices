const { Users } = require("../data");
module.exports = (req, res, next) => {
  const { name, password, email } = req.body;
  const findRepeatUser =
    Users.filter((i) => i.email.includes(email)).length === 1;
  if (!name || !password || !email) {
    const requiredinfo = Object.keys({ name, password, email }); //me quedo con los nombres de las keys

    const searchmissinginfo = [{ name }, { password }, { email }].filter(
      (item, index) => !item[requiredinfo[index]]
    ); //me quedo con los datos que faltan

    const missinginfo = searchmissinginfo.map((i) => Object.keys(i));
    // me quedo con los NOMBRES de las propiedades que faltan
    return res.status(404).send({
      error: true,
      message: `se require ${missinginfo} `,
    });
  }
  if (findRepeatUser) {
    res.status(404).send({
      error: true,
      message: "No puede registarse con el mismo email",
    });
  } else {
    next();
  }
};
