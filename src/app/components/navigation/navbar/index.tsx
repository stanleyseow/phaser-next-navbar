"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// react bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const Navigationbar = () => {
    const pathname = usePathname();

    return (
        <Navbar expand="sm" className={`purple-navbar`}>
            <Container fluid>
                <Navbar.Brand href="#">NavBrand</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* ===================> left nav <========================  */}
                    <Nav className="me-auto my-2 my-lg-0">
                        <li>
                            <Link
                                className={
                                    pathname == "/"
                                        ? "active-nav nav-link"
                                        : "nav-link"
                                }
                                href="/"
                            >
                                {" "}
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    pathname == "/page1"
                                        ? "active-nav nav-link"
                                        : "nav-link"
                                }
                                href="/page1"
                            >
                                {" "}
                                Page1
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    pathname == "/page2"
                                        ? "active-nav nav-link"
                                        : "nav-link"
                                }
                                href="/page2"
                            >
                                {" "}
                                Page2
                            </Link>
                        </li>
                    </Nav>

                    <Nav className="me-2 my-2 my-lg-0">
                        <li>
                            <Link
                                className={
                                    pathname == "/wallet"
                                        ? "active-nav nav-link"
                                        : "nav-link"
                                }
                                href="/wallet"
                            >
                                {" "}
                                Wallet
                            </Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
