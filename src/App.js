import CustomLoader from './components/customLoader/customLoader'
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';
import ProgressBar from './components/progressBar/ProgressBar';

function App() {
  return (
    <div className="App">
     {/* <CustomLoader size="large"/> */}
     {/* <InfiniteScroll /> */}
     <ProgressBar timer="5s" />

    </div>
  );
}

export default App;
