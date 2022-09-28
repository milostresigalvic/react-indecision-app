"use strict";

// CMD run project 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch

// other cmd run: 
// C:\React\react-course-projects\react-indecision-app
// live-server public

var app = {
    title: "This is app title.",
    subtitle: "This is app subtitle.",
    options: [11, 21, 31]
};

var Visibility = true;

var onToogle = function onToogle(e) {
    Visibility = !Visibility;
    renderContent();
};
var appRoot = document.getElementById('app');

var renderContent = function renderContent() {
    // JSX - JavaScript XML
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: onToogle },
            Visibility == true ? "Hide details" : "Show details"
        ),
        React.createElement(
            "p",
            null,
            Visibility && "Some details here..."
        )
    );

    ReactDOM.render(template, appRoot);
};

renderContent();
