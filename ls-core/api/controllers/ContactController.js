/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next) {

    var contactObj = {
      name: req.param('name'),
      email: req.param('email'),
      subject: req.param('subject'),
      message: req.param('message')
    }

    // Create a contact request
    Contact.create(contactObj, function contactCreated(err, user) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        // If error redirect back to contact page
        return res.redirect('/contact');
      }

      return res.redirect('/contact');
      });
  },
};

