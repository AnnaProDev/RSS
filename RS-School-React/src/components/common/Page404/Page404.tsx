import style from "./Page404.module.css"

const Page404: React.FC = () => {
	return (
	<div className={style.error_page}>
		<img src="https://static.vecteezy.com/system/resources/previews/015/131/133/original/crossing-sign-error-404-png.png" alt="error404"></img>
	</div>	
	)
}

export default Page404;