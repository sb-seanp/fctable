var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'fctable' });
});

router.get('/england/1', function (req, res) {
  var db = req.db;
  var collection = db.get('england1');
  collection.find({}, {}, function (e, docs) {
    res.render('leagues/england/england1', {
      "england1": docs
    });
  });
});

router.get('/spain/1', function (req, res) {
  var db = req.db;
  var collection = db.get('spain1');
  collection.find({}, {}, function (e, docs) {
    res.render('leagues/spain/spain1', {
      "spain1": docs
    });
  });
});

router.get('/germany/1', function (req, res) {
  var db = req.db;
  var collection = db.get('germany1');
  collection.find({}, {}, function (e, docs) {
    res.render('leagues/germany/germany1', {
      "germany1": docs
    });
  });
});

router.get('/italy/1', function (req, res) {
  var db = req.db;
  var collection = db.get('italy1');
  collection.find({}, {}, function (e, docs) {
    res.render('leagues/italy/italy1', {
      "italy1": docs
    });
  });
});

router.get('/france/1', function (req, res) {
  var db = req.db;
  var collection = db.get('france1');
  collection.find({}, {}, function (e, docs) {
    res.render('leagues/france/france1', {
      "france1": docs
    });
  });
});

router.get('/portugal/1', function (req, res) {
  var db = req.db;
  var collection = db.get('portugal1');
  collection.find({}, {}, function (e, docs) {
    res.render('leagues/portugal/portugal1', {
      "portugal1": docs
    });
  });
});

router.get('/about', function(req, res) {
  res.render('static/about', { title: 'fctable' });
});

router.get('/contact', function(req, res) {
  res.render('static/contact');
});

router.get('/dependencies', function(req, res) {
  res.render('static/dependencies');
});

module.exports = router;
