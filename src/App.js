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
// import CommentSection from "./components/commentSection/CommentSection";
// import Checkboxes  from "./components/nestedCheckbox/Checkboxes";
// import directory from "./components/nestedCheckbox/data"
// import Album from "./components/albumModal/Album";

// import useResize from "./components/ResizeWithThrottle/useResize";
// import Dropdown from "./components/multiSelectDropdown/dropdown";

// import initialComments from "./components/commentSection/commentData";

// import data from "./components/FAQ_accordian/faqData";
// import FAQ from "./components/FAQ_accordian/FAQ";

  import AutoComplete from "./components/autoComplete/AutoComplete";
import Bar from "./components/progressBar2/bar";
import TicTac from "./components/tictactoe/TicTac";
import ChipsInput from "./components/chipsInput/ChipsInput";
import AllComments from "./components/nestedComments/AllComments";

import Parent from "./components/childToParent/Parent";

import Form from "./components/hooks/react-19/formWithUseActionState";

function App() {
  // const [checked, setChecked] = useState({})

  // const fancyInputRef = useRef(null);

  // const width = window.innerWidth;
  // console.log("innerwidth: ",width);
  // let screentype = useResize();

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

      {/* <p>{screentype}</p> */}

      {/* <Dropdown /> */}

      {/* <CommentSection initialComments={initialComments}/> */}

      {/* <FAQ data={data}/> */}

      {/* <AutoComplete /> */}
      {/* <Bar /> */}
      {/* <TicTac size={4}/> */}
      {/* <ChipsInput /> */}
      {/* <AllComments /> */}
      {/* <Parent /> */}

      <Form />
      

    </div>
  );
}

export default App;
