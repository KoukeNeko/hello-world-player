import "./App.css";

function App() {
  return (
    <div
      className="App hero min-h-screen"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1180542165/photo/colorful-background-of-pastel-powder-explosion-rainbow-color-dust-splash-on-black-background.jpg?s=612x612&w=0&k=20&c=64yQAMVpqAJ-EUpLUIYotDg8UTpzCz1dxKLY4rSESpE=")`
      }}
    >
      <div className="mockup-window shadow-lg shadow-black/80 bg-base-300/70 w-3/6 backdrop-blur-xl">
        <div className="flex justify-center px-4 py-16 bg-base-200/50">Hello!</div>
      </div>
    </div>
  );
}

export default App;
