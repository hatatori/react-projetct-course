import logo from './logo.svg';
// import './App.css';
// import './index.css';
import data from './data'
import { useState } from 'react';
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} aniversários hoje</h3>
        <List people={people} />
        <button onClick={()=>setPeople(data.slice(0,2))}>Limpar</button>
      </section>
    </main>
  );
}

export default App;
