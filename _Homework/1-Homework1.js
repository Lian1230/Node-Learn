'use strict';

let articleList = (() => {
  var _ref = _asyncToGenerator(function* () {
    const data = yield fetch('https://cnodejs.org/');
    const $ = _cheerio2.default.load(data);
    const list = [];
    $('.topic_title').each(function () {
      const link = $(this).prop('href');
      const title = $(this).text().trim();
      if (link) {
        list.push({ title: title, link: link.trim() });
      }
    });
    return list;
  });

  return function articleList() {
    return _ref.apply(this, arguments);
  };
})();

let articleDetail = (() => {
  var _ref2 = _asyncToGenerator(function* (url) {
    const data = yield fetch('https://cnodejs.org' + url);
    return data.length;
  });

  return function articleDetail(_x) {
    return _ref2.apply(this, arguments);
  };
})();

let start = (() => {
  var _ref3 = _asyncToGenerator(function* () {
    const list = yield articleList();
    for (const item of list) {
      const length = yield articleDetail(item);
      console.log('%s [%s]', item.title, length);
    }
    console.log('done');
  });

  return function start() {
    return _ref3.apply(this, arguments);
  };
})();
var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function fetch(url) {
  return new Promise((resolve, reject) => {
    _request2.default.get(url, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

start().then(ret => console.log(ret)).catch(err => console.error(err));
