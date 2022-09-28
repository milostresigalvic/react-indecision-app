// CMD run project 
// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch

// other cmd run: 
// C:\React\react-course-projects\react-indecision-app
// live-server public
 
const app = {
    title: "This is app title.",
    subtitle: "This is app subtitle.",
    options:  [11, 21, 31 ]
}

let Visibility = true;
 
const onToogle = (e) => {
    Visibility = !Visibility;
    renderContent();
}
const appRoot = document.getElementById('app');
 
const renderContent = () => {
    // JSX - JavaScript XML
    const template = (
        <div> 
            <h1>{app.title}</h1>
 
            <button onClick={onToogle} >{Visibility == true ? "Hide details" : "Show details" }</button>
  
            <p>{Visibility && "Some details here..." }</p>
            
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderContent();