// import CustomLoader from '../temp_component/customLoader/customLoader'
// import InfiniteScroll from '../temp_component/infiniteScroll/InfiniteScroll';
// import ProgressBar from '../temp_component/progressBar/ProgressBar';
// import CountdownTimer from './components/countdownTimer/countdownTimer';
// import ExplorerComponent from "./components/fileExplorer/explorerComponent";
// import Cart from "./components/cart/cart";
// import Form from "./components/formUsingUseReducer/form";
// import ThemeButton from "./components/hooks/ThemeToggleWithContext/themeButton";
// import Page from "./components/pagination/page";

// import ValidOtp from "./components/OTP/validOtp";
// import TabForm from "./components/tab-form/tabForm";

// import { useRef } from "react";
// import FancyInput from "./components/hooks/useImperativeHandle";

import { useState } from "react";
// import Checkboxes  from "./components/nestedCheckbox/Checkboxes";
// import directory from "./components/nestedCheckbox/data"
// import Album from "./components/albumModal/Album";

import useResize from "./components/ResizeWithThrottle/useResize";

function App() {
  // const [checked, setChecked] = useState({})

  // const fancyInputRef = useRef(null);

  // const width = window.innerWidth;
  // console.log("innerwidth: ",width);
  let screentype = useResize();

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

      {/* <Page /> */}

      {/* <Checkboxes directory={directory} checked={checked} setChecked={setChecked}/> */}
      {/* <Album /> */}

      <p>{screentype}</p>


    </div>
  );
}

export default App;
