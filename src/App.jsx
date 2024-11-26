import React from "react";
import Text from "./Components/Text";
import MultipleExpressionsTernary from "./Components/MultipleExpressionsTernary";
import HtmlRef from "./Components/HtmlRef";
import PreviousValue from "./Components/RefModel";
import RefUsing from "./Components/RefUsing";
import Effect from "./Components/Effect";


const App = () => {
  return (
    <div>
      <Text n="" p="Type Here !" />
      <MultipleExpressionsTernary />
      <Text n="Hello" />
      <PreviousValue />
      <HtmlRef />
      <RefUsing />
      <Effect/>

    </div>
  );
};

export default App;
