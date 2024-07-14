/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import style from "./Card.module.css"

interface Props {
	name: string
	url: string
}

const Result: React.FC<Props> = (props: Props) => {
	
    return (
      <div className={style.result}>
			<h3>{props.name}</h3>
			<p>{props.url}</p>
      </div>
    );
  }

export default Result;