"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('app js is running');

var User = function User(props) {
  return React.createElement(
    "div",
    { className: "user-group" },
    React.createElement(
      "p",
      null,
      "Name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Birthday: ",
      props.birthday
    )
  );
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "header-group" },
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

var Options = function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "options-list" },
        React.createElement(
          "div",
          { className: "btn-group" },
          React.createElement(
            "button",
            { disabled: this.props.optionsIsHere, onClick: this.props.removeAllOptions, className: "btn btn-danger" },
            "Remove all"
          )
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option, removeSingleOptions: _this2.props.removeSingleOptions });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "add-option-list" });
    }
  }]);

  return AddOption;
}(React.Component);

var Form = function (_React$Component3) {
  _inherits(Form, _React$Component3);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this4 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this4.addOptions = _this4.addOptions.bind(_this4);
    _this4.state = {
      error: undefined
    };
    return _this4;
  }

  _createClass(Form, [{
    key: "addOptions",
    value: function addOptions(e) {
      e.preventDefault();

      var value = e.target.elements.option.value.trim();
      var error = this.props.addOption(value);

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form-wraper" },
        React.createElement(
          "form",
          { onSubmit: this.addOptions },
          this.state.error && React.createElement(
            "p",
            null,
            this.state.error
          ),
          React.createElement("input", { type: "text", className: "form-control mb-2", placeholder: "Type something", name: "option" }),
          React.createElement(
            "button",
            { className: "btn btn-info" },
            "Add Option"
          )
        )
      );
    }
  }]);

  return Form;
}(React.Component);

;

// 027 Nesting Components

var FirstApp = function (_React$Component4) {
  _inherits(FirstApp, _React$Component4);

  function FirstApp(props) {
    _classCallCheck(this, FirstApp);

    var _this5 = _possibleConstructorReturn(this, (FirstApp.__proto__ || Object.getPrototypeOf(FirstApp)).call(this, props));

    _this5.removeAllOptions = _this5.removeAllOptions.bind(_this5);
    _this5.handalePick = _this5.handalePick.bind(_this5);
    _this5.addOption = _this5.addOption.bind(_this5);
    _this5.removeSingleOptions = _this5.removeSingleOptions.bind(_this5);
    _this5.state = {
      options: ['Option One', 'Option Two', 'Option Three']
    };
    return _this5;
  }

  _createClass(FirstApp, [{
    key: "removeAllOptions",
    value: function removeAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handalePick",
    value: function handalePick() {
      // alert("test");
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      console.log(option);
      alert(option);
    }
  }, {
    key: "addOption",
    value: function addOption(option) {
      console.log(option);
      if (!option) {
        return 'Add Vaild Value';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This value already exists';
      }
      // set state type new formating
      this.setState(function (e) {
        return { options: e.options.concat([option]) };
      });
    }
  }, {
    key: "removeSingleOptions",
    value: function removeSingleOptions(optionToRemove) {
      console.log(optionToRemove);
      this.setState(function (e) {
        return {
          options: e.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "My First React App",
          subtitle = "Some text here";
      // options = ['Option One', 'Option Two', 'Option Three'];
      return React.createElement(
        "div",
        { className: "col-md-8 mx-auto text-center" },
        React.createElement(Options, { options: this.state.options, optionsIsHere: this.state.options.length === 0, removeSingleOptions: this.removeSingleOptions, removeAllOptions: this.removeAllOptions }),
        React.createElement(AddOption, null),
        React.createElement(Form, { addOption: this.addOption })
      );
    }
  }]);

  return FirstApp;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      return React.createElement(
        "div",
        { className: "option-list" },
        this.props.optionText,
        React.createElement(
          "button",
          {
            className: "btn btn-info",
            onClick: function onClick(e) {
              _this7.props.removeSingleOptions(_this7.props.optionText);
            }
          },
          "Remove"
        )
      );
    }
  }]);

  return Option;
}(React.Component);

;

// class less component not use (this)
var MyApp = function MyApp() {
  var title = "Personal Information";
  return React.createElement(
    "div",
    { className: "app-group" },
    React.createElement(FirstApp, null)
  );
};

var app = document.getElementById('app');

ReactDOM.render(React.createElement(MyApp, null), app);
