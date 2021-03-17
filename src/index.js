import { mount } from "forgo";

function Parent(props) {
  return {
    render(props, args) {
      return (
        <div>
          <h1>Forgo App</h1>
          <p>
            Welcome to Forgo. Start by editing src/index.js in your favorite
            editor.
          </p>
          <p>Let's greet a couple of strangers.</p>
          <ul>
          <Greeter firstName="Jeswin" />
          <Greeter firstName="Kai" />
          </ul>
        </div>
      );
    },
  };
}

function Greeter(props) {
  return {
    render(props, args) {
      return <li>Hello {props.firstName}!</li>;
    },
  };
}

window.addEventListener("load", () => {
  mount(<Parent />, document.getElementById("root"));
});
