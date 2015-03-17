var PagesController = {};

var config          = require('config');

PagesController.home = function(req, res) {

  if (config.has('example')) {
    console.log('Config parameter: ' + config.get('example'));
  }

  res.render('pages/home');
};

PagesController.info = function(req, res) {
  res.render('pages/info');
};

PagesController.about = function(req, res) {
  res.render('pages/about');
};

module.exports = PagesController;
