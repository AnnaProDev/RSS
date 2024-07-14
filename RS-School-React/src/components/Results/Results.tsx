/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import Card from "./Card/Card";
import style from "./Results.module.css"

interface ItemInterface {
	name: string
	url: string
}
interface Props {
  items: Array<ItemInterface>;
}

const Results: React.FC <Props> = (props) => {

    return (
		<div className={style.bottom}>
			<div className={style.results}>
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
