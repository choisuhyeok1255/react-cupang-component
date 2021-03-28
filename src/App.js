import "./App.css";
import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Input from "./components/Input/Input";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <Logo type="colorful"></Logo>
      <Logo type="black"></Logo>
      <Logo type="mono"></Logo>

      <Button mode="Primary" state="normal">
        버튼
      </Button>
      <Button mode="Secondary" state="normal">
        버튼
      </Button>
      <Button mode="Primary" state="disabled">
        버튼
      </Button>
      <Button mode="Secondary" state="disabled">
        버튼
      </Button>

      <Icon className="letter" shape="letter" />
      <Icon className="lock" shape="lock" />
      <Icon className="hide" shape="hide" />
      <Icon className="show" shape="show" />

      <Input type="email" />
      <Input type="password" />
    </div>
  );
}

export default App;
