import "./App.css";



import { Home } from './screen'


function App() {
  return (
    <div className="App w-full hero-content text-center"
      style={{
        backgroundColor: "#FF3CAC",
        backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)"

      }}
    >
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
  );
}

export default App;
