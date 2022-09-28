"use strict";

// CMD run project 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch

// other cmd run: 
// C:\React\react-course-projects\react-indecision-app
// live-server public

var app = {
    title: "This is app title1.",
    subtitle: "This is app subtitle.",
    options: [11, 21, 31]
};

var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderContent();
    }

    console.log(option);
};
var onRemoveAll = function onRemoveAll(e) {
    app.options = [];
    renderContent();
};

var onMakeDecision = function onMakeDecision(e) {
    var randomNum = Math.floor(Math.random() * app.options.length);
    alert(randomNum);
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
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove all"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    "Option: ",
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: handleSubmit },
            React.createElement("input", { placeholder: "option", type: "text", name: "option" }),
            React.createElement("br", null),
            "            ",
            React.createElement("input", { type: "submit", value: "Add option" })
        )
    );

    ReactDOM.render(template, appRoot);
};

renderContent();
