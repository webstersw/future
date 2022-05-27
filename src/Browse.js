"use strict";
exports.__esModule = true;
var react_1 = require("react");
var React = require("react");
var Search_1 = require("./Search");
function filterExercises(exercises, search) {
    console.log(search);
    if (search) {
        var lowerSearch_1 = search.toLowerCase();
        return exercises.filter(function (e) { return e.name.toLowerCase().includes(lowerSearch_1); });
    }
    else {
        return exercises;
    }
}
;
var Browse = function (_a) {
    var onSelect = _a.onSelect, selectedId = _a.selectedId;
    function getExercises() {
        var apiUrl = 'https://candidate.staging.future.co/sandbox/api/exercises';
        fetch(apiUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            setExercises(data);
            setFiltered(data);
        });
    }
    ;
    var _b = (0, react_1.useState)(), exercises = _b[0], setExercises = _b[1];
    var _c = (0, react_1.useState)(), filtered = _c[0], setFiltered = _c[1];
    (0, react_1.useEffect)(function () {
        if (!exercises) {
            getExercises();
        }
    }, [exercises, filtered]);
    return (React.createElement("div", { className: "BrowseContent" },
        React.createElement(Search_1["default"], { onSearch: function (searchString) { return setFiltered(filterExercises(exercises, searchString)); } }),
        React.createElement("ul", null, filtered === null || filtered === void 0 ? void 0 : filtered.map(function (e) {
            return React.createElement("li", { key: e.id, onClick: function () { return onSelect(e); } },
                React.createElement("a", { href: "#", className: selectedId === e.id ? "Active" : "" }, e.name));
        }))));
};
exports["default"] = Browse;
