/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ItemInterface } from "../../interfaces/interfaces";
import Result from "./Result/Result";
import "./Results.css"

interface Props {
  items: Array<ItemInterface>;
}

const Results = (props: Props) => {
	

    return (
      <div className="results">
        {props.items.map((item, id) => (
          <div key={id}>
            <Result name={item.name} url={item.url} />
          </div>
        ))}
      </div>
    );
  }

export default Results;
