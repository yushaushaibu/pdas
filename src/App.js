import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(CortanaImage);

function App() {
  return (
    <div>
    <img alt="" src={AlexaImage} />
    <img alt="" src={SiriImage} />

      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa23" />
      <ProfileCard title="Cortana" handle="@cortana11" />
      <ProfileCard title="Siri" handle="@apple_siri" />
    </div>
  );
}

export default App;
