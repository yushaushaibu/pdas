import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa23" />
      <ProfileCard title="Cortana" handle="@cortana11" />
      <ProfileCard title="Siri" handle="@apple_siri" />
    </div>
  );
}

export default App;
