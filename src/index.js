import { mount } from "forgo";

function Parent(props) {
  return {
    render(props, args) {
      return (
        <div>
          <Greeter firstName="Jeswin" />
          <Greeter firstName="Kai" />
        </div>
      );
    },
  };
}

function Greeter(props) {
  return {
    render(props, args) {
      return <div>Hello {props.firstName}</div>;
    },
  };
}

window.addEventListener("load", () => {
  mount(<Parent />, document.getElementById("root"));
});
