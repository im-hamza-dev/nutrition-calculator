import Number from "../number/number.component";
import Weight from "../weight/weight.component";
import Height from "../height/height.component";
import MultipleChoice from "../multipleChoice/multipleChoice.component";
import Summary from "../summary/summary.component";
import { QuestionDetails } from "../../utils/interfaces";

const generateInputElem = (currentQuestion: QuestionDetails) => {
  let inputElem = <div></div>;
  switch (currentQuestion?.type) {
    case "number":
      inputElem = <Number />;
      break;
    case "weight":
      inputElem = <Weight />;
      break;
    case "height":
      inputElem = <Height />;
      break;
    case "multipleChoice":
      inputElem = <MultipleChoice />;
      break;
    case "name":
      inputElem = <div>Name and email</div>;
      break;
    case "summary":
      inputElem = <Summary />;
      break;

    default:
      break;
  }
  return inputElem;
};

export { generateInputElem };
