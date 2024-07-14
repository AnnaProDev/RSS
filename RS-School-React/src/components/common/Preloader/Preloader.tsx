import style from "./Preloader.module.css"

const Preloader: React.FC  = () => {

	return (
		<div className={style.preloader}>
			<div className="lds-ripple"><div></div><div></div></div>
		</div>

	);
}

export default Preloader;
