import "./styles.css";

const options = {
  [true]: {
    message: "🎉 Nenhuma pendência encontrada! 🎉",
    className: "none-pending",
  },
  [false]: {
    message: "Por favor, selecione uma opção... 👀",
    className: "no-option",
  },
};

const EmptyReport = (nonePending) => {
  const container = document.createElement("div");
  container.classList.add(options[nonePending].className);
  const span = document.createElement("span");
  span.innerText = options[nonePending].message;

  container.append(span);

  return container;
};

export default EmptyReport;
