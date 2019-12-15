console.log("Hello world.");
const app = {
  title: "Indecision App",
  subtitle: "You really dont stand a chance",
  options: []
};
const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Your Options:" : "no options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What Should I Do
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
