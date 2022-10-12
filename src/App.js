import './App.css';
import Card from './components/Card';
import Hero from "./components/Hero.js"
import Navbar from "./components/Navbar.js"
import data from "./data.js"

function App() {
  const users = data.map(user => {
    return(
      <Card
        key={user.id}
        user={user}
      />
    )
  });

  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {users}
      </section>
    </div>
  )
}

export default App;
