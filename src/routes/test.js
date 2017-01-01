'use strict'

import path from 'path';
import debug from 'debug';


module.exports = function (done) {
  $.router.get('*', function (req, res, next) {
    const debug = $.createDebug('router');
    debug('URL:', req.url);
    if (req.url.indexOf('/api/') !== 0) {
      res.sendFile(path.resolve(__dirname, '../../frontend/index.html'));
    } else {
      next();
    }
  });

  done();
}
