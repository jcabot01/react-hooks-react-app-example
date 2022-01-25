import React from "react"; //allows React libraries to be used.  In v.17 we don't need this statement
// import { format } from "date-fns"; //uses the 'format' from the dat-fns package
import ExampleComponent from "./ExampleComponent"; //allows ExampleComponent.js file to be used in the App
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}
//we can only have one default export per file, this is the main thing we want to export
export default App;
