import React from "react";
import Text from "./Components/Text";
import MultipleExpressionsTernary from "./Components/MultipleExpressionsTernary";
import HtmlRef from "./Components/HtmlRef";
import PreviousValue from "./Components/RefModel";

const App = () => {
  return (
    <div>
      <Text n="" p="Type Here !" />
      <MultipleExpressionsTernary />
      <Text n="Hello" />
      <PreviousValue />
      <HtmlRef />
    </div>
  );
};

export default App;
