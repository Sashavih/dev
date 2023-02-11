import './App.css';
import './components/variables.scss';
import words from './utils/words';
import WordCard from './components/WordCard/WordCard';
import WordsList from './components/WordsList/WordsList';

function App() {
  return (
    <div className="App">
      <WordCard />
      {
        words.map((word) =>
          <WordsList key={word.id} {...word} />
        )
      }

    </div>
  );
}

export default App;
