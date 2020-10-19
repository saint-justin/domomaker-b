const controllers = require('./controllers');

const router = (app) => {
  app.get('/login', controllers.Account.loginPage);
  app.get('/signup', controllers.Account.signupPage);
  app.get('/maker', controllers.Domo.makerPage);
  app.get('/logout', controllers.Account.logout);
  app.get('/', controllers.Account.loginPage);

  app.post('/login', controllers.Account.login);
  app.post('/signup', controllers.Account.signup);
  app.post('/maker', controllers.Domo.makeDomo);
};

module.exports = router;
