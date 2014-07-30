
'use strict';

var jschan          = require('../');
var abstractSession = require('./abstract_session');

describe('memory session', function() {
  abstractSession(function(cb) {
    var session = jschan.memorySession();
    cb(null, session, session);
  });
});
