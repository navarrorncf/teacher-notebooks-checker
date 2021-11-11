import "./styles.css";

const AppContainer = (children) => {
  const AppContainer = document.createElement("div");
  AppContainer.classList.add("app-container");
  AppContainer.append(...children);

  return AppContainer;
};

export default AppContainer;
