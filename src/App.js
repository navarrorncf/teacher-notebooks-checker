import AppContainer from "./js/components/AppContainer";
import bootstrap from "./js/bootstrap";

// Initializes DOM Update handlers
import "./js/DOMUpdateHandlers";

// Bootstraps the application
const App = AppContainer([
  bootstrap.title(),
  bootstrap.options(),
  bootstrap.reportContainer(),
]);

export default App;
