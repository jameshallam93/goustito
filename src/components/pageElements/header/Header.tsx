import "./header.scss"

const Header = () => {
    return (
        <header>
            <h1>goustito</h1>
            <nav>
                <ul>
                    <li>
                        <a>RECIPES</a>
                    </li>
                    <li>
                        <a>FEED</a>
                    </li>
                    <li>
                        <a>LOGIN</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export { Header };