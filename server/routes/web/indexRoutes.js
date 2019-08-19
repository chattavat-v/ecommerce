var Products = require('../../Models/productsModel');
var Orders = require('../../Models/ordersModel');
var _ = require('lodash');

module.exports = function(app, passport) {

  //Index page
  app.get('/admin', (req, res, next) => {
    res.render('index.ejs', {title: 'GrowElectronics'});
  });

  //Login page
  app.get('/admin/login', (req, res, next) => {
    res.render('login.ejs', { title: 'GrowElectronics', message: req.flash('loginMessage') });
  });

  //Signup page
  app.get('/admin/signup', (req, res, next) => {
    res.render('signup.ejs', { title: 'GrowElectronics', message: req.flash('signupMessage') });
  });

  //signup
  app.post('/admin/signup', passport.authenticate('local-signup', {
    successRedirect: '/admin/profile',
    failureRedirect: '/admin/signup',
    failureFlash: true
  }))

  //login
  app.post('/admin/login', passport.authenticate('local-login', {
    successRedirect: '/admin/profile',
    failureRedirect: '/admin/login',
    failureFlash: true
  }));

  //logout
  app.get('/admin/logout', (req, res, next) => {
    req.logout();
    res.redirect('/admin');
  })

  //Infomation pages : search, orders, product
  app.get('/admin/profile', isLoggedIn, (req, res, next) => {
    Products.find().sort({
      created_date: -1
    }).exec((err, data) => {
      res.render('profile.ejs', {
        title: 'GrowElectronics',
        user: req.user,
        products: data
      })
    })
  });

  app.post('/admin/search', (req, res, next) => {
    var search = _.omitBy(req.body, _.isEmpty);
    console.log("search:", req.body, search);
    Products.find(search, (err, data) => {
      res.render('profile.ejs', {
        title: 'GrowElectronics',
        user: req.user,
        products: data
      })
    })
  })

  app.get('/admin/orders', isLoggedIn, (req, res, next) => {
    Orders.find().sort({
      created_date: -1
    }).exec((err, data) => {
      console.log(data);
      res.render('orders.ejs', {
        title: 'GrowElectronics',
        orders: data
      })
    })
  });

  app.post('/admin/delete_order/:_id', (req, res, next) => {
    Orders.findByIdAndRemove(req.params._id, (err, data) => {
      if(err) console.log(err);
      res.redirect('/admin/orders');
    })
  })

  app.get('/admin/products', isLoggedIn, (req, res, next) => {
    Products.find().sort({
      created_date: -1
    }).exec((err, data) => {
      res.render('products.ejs', {
        title: 'GrowElectronics',
        products: data
      })
    })
  });

  app.post('/admin/delete_product/:_id', (req, res, next) => {
    Products.findByIdAndRemove(req.params._id, (err, data) => {
      if(err) console.log(err);
      res.redirect('/admin/products');
    })
  });

  app.get('/admin/edit/:_id', (req, res, nwxt) => {
    Products.findById(req.params._id, (err, data) => {
      if(err) console.log(err);
      // res.send(data);
      res.render('edit.ejs', {
        title: 'GrowElectronics',
        products: data
      })
    })
  })

  app.get('/admin/add', (req, res, next) => {
    res.render('add.ejs', {
      title: 'GrowElectronics'
    })
  })

  app.post('/admin/add', (req, res, next) => {
    var doc = new Products(req.body);
    console.log(doc);
    doc.save((err, data) => {
      if(err) console.log(err);
      res.redirect('/admin/products');
    })
  })

  app.post('/admin/update/:_id', (req, res, next) => {
    Products.findByIdAndUpdate(req.params._id,  req.body, (err, data) => {
      if(err) console.log(err);
      res.redirect('/admin/products');
    })
  })


};

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
      return next();

  res.redirect('/admin');
}