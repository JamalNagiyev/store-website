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
                            <Link to="/registration">Registration</Link>
                        </li>
                        <li>
                            <Link to="/accountLogin">Account Login</Link>
                        </li>
                        <li>
                            <Link to="/productList">Product List</Link>
                        </li>
                        <li>
                            <Link to="/basket">Basket</Link>
                        </li>
                        <li>
                            <Link to="/paymentPage">Payment page</Link>
                        </li>
                        <li>
                            <Link to="/specificProductPage">Specific product page</Link>
                        </li>
                        <li>
                            <Link to="/userProfile">User profile</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
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