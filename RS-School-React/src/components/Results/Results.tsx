/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { ItemInterface } from "../../interfaces/interfaces";
import Card from "./Card/Card";
import "./Results.css"

interface Props {
  items: Array<ItemInterface>;
}

const Results = (props: Props) => {

    return (
		<div className="bottom">
			<div className="results">
			{props.items.map((item, id) => (
				<div key={id}>
					<Card name={item.name} url={item.url} />
				</div>
			))}
			</div>
		</div>
    );
  }

export default Results;
