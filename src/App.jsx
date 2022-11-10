import "./styles/App.css";
import { Application } from "./components/Application";
import data from "./api.json";

function App() {
  return (
    <div className="App">
      <section className="container">
        {data.map(
          ({ id, logo, icon, enabled, application_status, version }) => (
            <Application
              key={id}
              id={id}
              logo={logo}
              icon={icon}
              enabled={enabled}
              applicationStatus={application_status}
              version={version}
            />
          )
        )}
      </section>
    </div>
  );
}

export default App;
