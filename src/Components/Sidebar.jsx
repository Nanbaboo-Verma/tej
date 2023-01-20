import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";




const SidebarData = [
    {
        title: "About Us",
        path: "/about-us",
        icon: "icon",
        iconClosed: "iconClosed",
        iconOpened: "iconOpened",

        subNav: [
            {
                title: "Our Aim",
                path: "/about-us/aim",
                icon: "icon"
            },
            {
                title: "Our Vision",
                path: "/about-us/vision",
                icon: "icon"
            },
        ],
    },
    {
        title: "Services",
        path: "/services",
        icon: "icon",
        iconClosed: "iconClosed",
        iconOpened: "iconOpened",

        subNav: [
            {
                title: "Service 1",
                path: "/services/services1",
                icon: "icon",
                cName: "sub-nav",
            },
            {
                title: "Service 2",
                path: "/services/services2",
                icon: "icon",
                cName: "sub-nav",
            },
            {
                title: "Service 3",
                path: "/services/services3",
                icon: "icon",
            },
        ],
    },
    {
        title: "Contact",
        path: "/contact",
        icon: "icon",
    },
    {
        title: "Events",
        path: "/events",
        icon: "icon",
        iconClosed: "iconClosed",
        iconOpened: "iconOpened",
        subNav: [
            {
                title: "Event 1",
                path: "/events/events1",
                icon: "icon",
            },
            {
                title: "Event 2",
                path: "/events/events2",
                icon: "icon",
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
        icon: "icon",
    },
];


// const Nav = styled.div`
// background: #15171c;
// height: 80px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// `;

// const NavIcon = styled(Link)`
// margin-left: 2rem;
// font-size: 2rem;
// height: 80px;
// display: flex;
// justify-content: flex-start;
// align-items: center;
// `;

// const SidebarNav = styled.nav`
// background: #15171c;
// width: 250px;
// height: 100vh;
// display: flex;
// justify-content: center;
// position: fixed;
// top: 0;
// left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
// transition: 350ms;
// z-index: 10;
// `;

// const SidebarWrap = styled.div`
// width: 100%;
// `;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <>
                <ul>
                    <Link to="#" onClick={showSidebar}>
                        X
                    </Link>
                    <h1
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "green"
                        }}
                    >
                        GeeksforGeeks
                    </h1>
                </ul>

                {SidebarData.map((item, index) => {
                    return <SubMenu item={item} key={index} />;
                })}

            </>
        </>
    );
};

export default Sidebar;
