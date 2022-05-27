"use strict";
exports.__esModule = true;
var react_1 = require("react");
var React = require("react");
var Details = function (_a) {
    var selected = _a.selected;
    function getPrediction(selectedId) {
        setLoadingPrediction(true);
        var apiUrl = "https://candidate.staging.future.co/sandbox/api/exercises/".concat(selectedId, "/predictions");
        fetch(apiUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            setPrediction(data);
            setLoadingPrediction(false);
        });
    }
    ;
    function getDifficulty(level) {
        switch (level) {
            case 0:
                return "Simple";
                break;
            case 1:
                return "Easy";
                break;
            case 2:
                return "Medium";
                break;
            case 3:
                return "Hard";
                break;
            default:
                return "Unknown";
                break;
        }
    }
    var _b = (0, react_1.useState)(), prediction = _b[0], setPrediction = _b[1];
    var _c = (0, react_1.useState)(true), predictionLoading = _c[0], setLoadingPrediction = _c[1];
    (0, react_1.useEffect)(function () {
        if (selected && (prediction === null || prediction === void 0 ? void 0 : prediction.exercise_id) != selected.id) {
            getPrediction(selected.id);
        }
    }, [prediction, selected]);
    return (React.createElement("div", { className: "DetailsContent" },
        selected &&
            React.createElement("div", null,
                React.createElement("h2", null, selected.name),
                React.createElement("p", null, selected.description),
                React.createElement("video", { width: "320", height: "240", controls: true, key: selected.id },
                    React.createElement("source", { src: selected.video.url, type: "video/mp4" }),
                    "Your browser does not support the video tag.")),
        !predictionLoading && React.createElement("h3", null,
            "Difficulty - ",
            getDifficulty(prediction.skill_level.level))));
};
exports["default"] = Details;
