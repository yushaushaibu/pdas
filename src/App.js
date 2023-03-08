import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa23"
                image={AlexaImage}
                description="Alexa is a virtual assistant created by Amason"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana11"
                image={CortanaImage}
                description="Cortana is Microsoft\'s AI assistant"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@apple_siri"
                image={SiriImage}
                description="Siri is operates on iDevices including iPhones."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
