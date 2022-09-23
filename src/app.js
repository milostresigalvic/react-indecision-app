// CMD run project 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch
 
const app = {
    title: "This is app title.",
    subtitle: "This is app subtitle.",
    options: ['One','Two']
}

// JSX - JavaScript XML
const template = (
    <div> 
        <h1>{app.title}</h1>
        {app.subtitle  && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "here are your options" : "No options" }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const user = {
    name: "Mike",
    age: 12,
    location: "Philadelphia"
}
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}
const template2 = (
    <div>
        <h1>{user.name ? user.name : "Anonymous" }</h1>
        {(user.age && user.age >= 18) && <p>Age:{user.age} </p> }
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

console.log();