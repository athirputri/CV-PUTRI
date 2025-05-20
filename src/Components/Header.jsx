import { Navbar, NavbarLink } from "flowbite-react"

const Header = () => {
    return (
        <Navbar>
            {/* <Navbar.Brand as={NavbarLink}> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Portofolio</span>
            {/* </Navbar.Brand> */}
            {/* <Navbar.Toggle /> */}
            <Navbar.Collapse>
                {/* <Navbar.Link href="#" active> */}
                    2025
                {/* </Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header