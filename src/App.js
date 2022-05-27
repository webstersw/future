"use strict";
exports.__esModule = true;
require("./App.css");
var react_1 = require("react");
var React = require("react");
var Browse_1 = require("./Browse");
var Details_1 = require("./Details");
var App = function () {
    var _a = (0, react_1.useState)(undefined), selected = _a[0], setSelected = _a[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, "Find an Exercise"),
        React.createElement("div", { className: "Content" },
            React.createElement("div", { className: "Browse" },
                React.createElement(Browse_1["default"], { onSelect: setSelected, selectedId: selected === null || selected === void 0 ? void 0 : selected.id })),
            React.createElement("div", { className: "Details" },
                React.createElement(Details_1["default"], { selected: selected })))));
};
exports["default"] = App;
