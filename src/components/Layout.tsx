import { Link, Outlet } from "react-router";

export default function Layout() {
    return (
        <div className="">
            <header>
                <nav>
                    <ul className="flex gap-4 ml-4 my-2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/basket">Basket</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}