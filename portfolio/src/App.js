import Header from './components/header';
import Footer from './components/footer';

const styles = {
  main: {
    backgroundImage: 'linear-gradient(black, grey)',
  }
}

function App() {
  return (
    <div className="App" style={styles.main}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
