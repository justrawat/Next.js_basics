"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _User = require("../../components/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/justrawat/Downloads/react-nextjs/pages/auth/index.js?entry";


var authIndexPage = function authIndexPage(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "The Auth Index Page - ", props.appName), _react2.default.createElement(_User2.default, { name: "Max", age: 28, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

//Go to the pages/index.js to read about getInitialProps, I have explained that in brief there.
authIndexPage.getInitialProps = function (context) {
  var promise = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJVc2VyIiwiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztBQUVqQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixxQkFBQTt5QkFDcEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBMkIsZ0NBRDdCLEFBQ0UsQUFBaUMsQUFDakMsMEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVcsT0FBTSxLQUFqQixBQUFzQjtnQkFBdEI7a0JBSGtCLEFBQ3BCLEFBRUU7QUFBQTs7QUFISjs7QUFPQTtBQUNBLGNBQUEsQUFBYyxrQkFBa0IsbUJBQVcsQUFDekM7TUFBTSxnQ0FBc0IsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQy9DO2VBQVcsWUFBTSxBQUNmO2NBQVEsRUFBRSxTQUFWLEFBQVEsQUFBVyxBQUNwQjtBQUZELE9BQUEsQUFFRyxBQUNKO0FBSkQsQUFBZ0IsQUFLaEIsR0FMZ0I7U0FLaEIsQUFBTyxBQUNSO0FBUEQsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qdXN0cmF3YXQvRG93bmxvYWRzL3JlYWN0LW5leHRqcyJ9