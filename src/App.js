import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa23" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana11" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@apple_siri" image={SiriImage} />
    </div>
  );
}

export default App;
