const sequelize = require("../models/index");
const User = sequelize.User;

const StaticController = () => {
  return {
    home: (request, response, next) => {
      User.findAll()
        .then((users) => {
          response.render("home", {
            pageTitle: "HomePage",
            path: "/",
            users: users,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
};

module.exports.StaticController = StaticController;
