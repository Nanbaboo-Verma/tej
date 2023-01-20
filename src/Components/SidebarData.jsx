import React from "react";


export const SidebarData = [
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
