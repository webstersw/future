"use strict";
exports.__esModule = true;
var React = require("react");
var Search = function (_a) {
    var onSearch = _a.onSearch;
    return (React.createElement("h2", { className: "Search" },
        "Search: ",
        React.createElement("input", { type: "text", onChange: function (e) { return onSearch(e.target.value); } })));
};
exports["default"] = Search;
