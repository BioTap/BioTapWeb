interface MenuItem {
    id: number;
    page:string;
    title: string;
    titleKey: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
        titleKey: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    
    {
        id: 1,
        page:"nav_1",
        has_dropdown: false,
        title: "Home",
        titleKey: "nav.home",
        link: "/",
    },
    {
        id: 2,
        page:"nav_1",
        has_dropdown: false,
        title: "Feature",
        titleKey: "nav.services",
        link: "/#feature",
    },
    {
        id: 3,
        page:"nav_1",
        has_dropdown: false,
        title: "RoadMap",
        titleKey: "nav.roadmap",
        link: "/#roadMap",
    },
    // {
    //     id: 4,
    //     page:"nav_1",
    //     has_dropdown: true,
    //     title: "Blog",
    //     titleKey: "nav.blog",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/blog", title: "Our Blog", titleKey: "nav.blog" },
    //         { link: "/blog-details", title: "Blog-Details", titleKey: "nav.blog_details" },
    //     ],
    // },
    {
        id: 5,
        page:"nav_1",
        has_dropdown: false,
        title: "Contact",
        titleKey: "nav.contact",
        link: "/contact",
    },
    
    {
        id: 1,
        page:"nav_2",
        has_dropdown: false,
        title: "Home",
        titleKey: "nav.home",
        link: "/",
    },
    {
        id: 2,
        page:"nav_2",
        has_dropdown: false,
        title: "Why Blockchain",
        titleKey: "nav.about",
        link: "/home-two/#blockchain",
    },
    {
        id: 3,
        page:"nav_2",
        has_dropdown: false,
        title: "Feature",
        titleKey: "nav.services",
        link: "/home-two/#feature",
    },
    // {
    //     id: 4,
    //     page:"nav_2",
    //     has_dropdown: true,
    //     title: "Blog",
    //     titleKey: "nav.blog",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/blog", title: "Our Blog", titleKey: "nav.blog" },
    //         { link: "/blog-details", title: "Blog-Details", titleKey: "nav.blog_details" },
    //     ],
    // },
    {
        id: 5,
        page:"nav_2",
        has_dropdown: false,
        title: "Contact",
        titleKey: "nav.contact",
        link: "/contact",
    },
];
export default menu_data;
