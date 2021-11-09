const getHTMLElement = (content, type, isParent, classes) => {
  const baseElement = document.createElement(type);

  if (Array.isArray(classes)) {
    baseElement.classList.add(...classes);
  } else {
    baseElement.classList.add(classes);
  }

  if (isParent) baseElement.innerHTML = content;
  else baseElement.innerText = content;

  return baseElement;
};

export default getHTMLElement;
