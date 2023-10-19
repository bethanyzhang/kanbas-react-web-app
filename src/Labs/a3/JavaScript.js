import BooleanVariable from "./BooleanVariables.js"
import Destructing from "./Destructing.js"
import FunctionDestructing from "./FunctionDestructing.js"
import House from "./House.js"
import IfElse from "./IfElse.js"
import Spread from "./Spread.js"
import TernaryOperator from "./TernaryOperator.js"
import VariableTypes from "./VariableTypes.js"
import VariablesAndConstants from "./VariablesAndConstants.js"
import WorkingWithArrays from "./WorkingWithArrays.js"
import WorkingWithFunctions from "./WorkingWithFunctions.js"


function JavaScript () {
  console.log("Hello World!")
  return (
    <div>
      <h3>JavaScript</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariable />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <WorkingWithArrays />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>

  )
}

export default JavaScript