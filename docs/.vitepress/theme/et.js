import {
  get3dSidebar,
  getDesignSidebar,
  getFrontEndSidebar,
  getGraphicsSidebar,
  getIntroSidebar,
} from "./sideBar";

export default etThemeConfig = {
    siteTitle: "Interactive Graphics | Erasmus E-Design",
    logo: "./edesign-logo--mono.svg",
    lang: "et",
    nav: [
      { text: "Projektist", link: "/about/" },
      {
        text: "Course materials",
        items: [
          {
            text: "Introduction",
            link: "/intro/",
            activeMatch: "^/intro/",
          },
          { text: "Design", link: "/design/", activeMatch: "^/design/" },
          {
            text: "Front End",
            link: "/frontend/",
            activeMatch: "^/frontend/",
          },
          {
            text: "Graphics",
            link: "/graphics/",
            activeMatch: "^/graphics/",
          },
          { text: "3D", link: "/3d/", activeMatch: "^/3d/" },
        ],
        sidebar: {
          "/intro/": getIntroSidebar(),
          "/design/": getDesignSidebar(),
          "/frontend/": getFrontEndSidebar(),
          "/graphics/": getGraphicsSidebar(),
          "/3d/": get3dSidebar(),
          "/about/": [
            {
              text: "",
              items: [
                { text: "About this project", link: "/about/" },
                {
                  text: "What is e-design",
                  link: "/about/what-is-edesign",
                },
                { text: "Our project partners", link: "/about/partners" },
                { text: "Something more", link: "et/about/something" },
              ],
            },
          ],
        },
      },
    ],
  }