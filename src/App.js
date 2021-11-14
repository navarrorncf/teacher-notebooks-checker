import AppContainer from "./js/components/AppContainer";
import bootstrap from "./js/bootstrap";

const [title, options, reportContainer] = [
  bootstrap.title(),
  bootstrap.options(),
  bootstrap.reportContainer(),
];

// Bootstraps the application
const App = AppContainer([title, options, reportContainer]);

export { options, reportContainer };

// Initializes DOM Update handlers
import "./js/DOMUpdateHandlers";

export default App;
