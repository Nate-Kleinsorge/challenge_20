import Header from './components/header';
import Footer from './components/footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
      <title>Nate Kleinsorge</title>
    </Helmet>
    <div className="App">
      <Header />
      <Footer />
    </div>
    </>
  );
}

export default App;
