// import CustomLoader from '../temp_component/customLoader/customLoader'
// import InfiniteScroll from '../temp_component/infiniteScroll/InfiniteScroll';
// import ProgressBar from '../temp_component/progressBar/ProgressBar';
// import CountdownTimer from './components/countdownTimer/countdownTimer';
// import ExplorerComponent from "./components/fileExplorer/explorerComponent";
// import Cart from "./components/cart/cart";
// import Form from "./components/formUsingUseReducer/form";
// import ThemeButton from "./components/hooks/ThemeToggleWithContext/themeButton";
import Page from "./components/pagination/page";

import ValidOtp from "./components/OTP/validOtp";
import TabForm from "./components/tab-form/tabForm";

// import { useRef } from "react";
// import FancyInput from "./components/hooks/useImperativeHandle";

function App() {

  // const fancyInputRef = useRef(null);

  return (
    <div className="App">
     {/* <CustomLoader size="large"/> */}
     {/* <InfiniteScroll /> */}
     {/* <ProgressBar timer="5s" /> */}
     {/* <CountdownTimer /> */}
     {/* <ExplorerComponent /> */}
     {/* <Form /> */}
     {/* <ThemeButton /> */}
     {/* <Cart /> */}

     {/* <FancyInput ref={fancyInputRef} />
     <button onClick={() => fancyInputRef.current.focus()}>Focus</button>
     <button onClick={() => fancyInputRef.current.clear()}>Clear</button> */}

      {/* <ValidOtp total_digits={2}/> */}

      {/* <TabForm /> */}

      <Page />


    </div>
  );
}

export default App;
