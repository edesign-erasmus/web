export default {
    title: "Interactive Graphics | Erasmus E-Design",
    description: "Study materials for the course",
    themeConfig: {
        siteTitle: 'Interactive Graphics | Erasmus E-Design',
        logo: './edesign-logo--mono.svg',
        nav: [
            { text: 'About', link: '/about/'},
            {
                text: 'Course materials',
                items: [
                    { text: "Introduction", link: "/intro/", activeMatch: "^/intro/" },
                    { text: "Design", link: "/design/", activeMatch: "^/design/" },
                    { text: "Front End", link: "/frontend/", activeMatch: "^/frontend/" },
                    { text: "Graphics", link: "/graphics/", activeMatch: "^/graphics/" },
                    { text: "3D", link: "/3d/", activeMatch: "^/3d/" },
                ]
            },
          ],
          sidebar: {
            '/intro/' : getIntroSidebar(),
            "/design/": getDesignSidebar(),
            "/frontend/": getFrontEndSidebar(),
            "/graphics/": getGraphicsSidebar(),
            "/3d/": get3dSidebar(),
            "/about/" : [
                {
                    text: '',
                    items: [
                        { text: 'About this project', link: '/about/' },
                        { text: 'What is e-design', link: '/about/what-is-edesign' },
                        { text: 'Our project partners', link: '/about/partners' }
                    ]
                }
            ]
          }
      }
}

function getIntroSidebar() {
	return [
		{
			text: 'The Introduction',
			items: [
                { text: 'Before we start', link: '/intro/' },
				{ text: 'What is Interactive Graphics?', link: '/intro/intro/what' },
				{ text: 'History of IG', link: '/intro/intro/history' }
			]
		},
		{
			text: 'The Process',
			items: [
				{ text: 'Project management', link: '/intro/project/project-management' },
				{ text: 'Setting up the project', link: '/intro/project/setup' },
				{ text: 'Design process', link: '/intro/project/design-process' },
			]
		},
		{
			text: 'The Ergonomics',
			items: [
				{ text: 'Health risks and how to avoid them', link: '/intro/ergonomics/health-risks' },
			]
		},
		{
			text: 'The Community',
			items: [
				{ text: 'Inspiration, know-how, communication', link: '/intro/community/inspiration' },
				{ text: 'Tools', link: '/intro/community/tools' },
				{ text: 'Resources', link: '/intro/community/resources' },
			]
		},
	]
}

function getFrontEndSidebar() {
	return [
    {
        text: "Introduction",
        items: [
            { text: "Front-end", link: "/frontend/" },
        ]
    },
    {
      text: "Tooling",
      items: [
        { text: "Command Line Interface", link: "/frontend/tooling/cli" },
        { text: "IDE-s", link: "/frontend/tooling/ide" },
        { text: "Versioning", link: "/frontend/tooling/versioning" },
        { text: "Project managing", link: "/frontend/tooling/project-management" },
        { text: "Debuging tools", link: "/frontend/tooling/debugging" },
      ],
    },
    {
      text: "HTML",
      items: [
        { text: "History and standards", link: "/frontend/html/history" },
        { text: "Markup", link: "/frontend/html/syntax" },
        { text: "Elements", link: "/frontend/html/elements" },
        { text: "Document object model aka DOM", link: "/frontend/html/dom" },
      ],
    },
    {
      text: "CSS",
      items: [
        { text: "Syntax", link: "/frontend/css/syntax" },
        { text: "Layout", link: "/frontend/css/layout" },
        { text: "Responsiveness / mobile-first", link: "/frontend/css/responsive" },
        { text: "Units", link: "/frontend/css/units" },
        { text: "Designing in CSS", link: "/frontend/css/design" },
        { text: "Transitions and animations", link: "/frontend/css/transitions" },
        { text: "Frameworks", link: "/frontend/css/frameworks" },
      ],
    },
    {
      text: "Javascript",
      items: [
        { text: "Syntax", link: "/frontend/js/syntax" },
        { text: "DOM manipulation", link: "/frontend/js/dom" },
        { text: "Events", link: "/frontend/js/events" },
        { text: "Frameworks", link: "/frontend/js/frameworks" },
      ],
    },
	];
}

function getDesignSidebar() {
  return [
    {
        text: 'Introduction',
        items: [
            { text: "UI/UX design and prototyping", link: "/design/" },
        ]
    },
    {
      text: "Usability and accessibility",
      items: [
        { text: "Usability", link: "/design/usability/usability" },
        { text: "Accessibility", link: "/design/usability/accessibility" },
        { text: "Color and contrast", link: "/design/usability/color" },
        { text: "Typography", link: "/design/usability/typography" },
        { text: "Semantics", link: "/design/usability/semantics" },
      ],
    },
    {
      text: "Composition",
      items: [
        { text: "Design patterns", link: "/design/composition/patterns" },
        { text: "Layout / grid", link: "/design/composition/layout" },
        { text: "UI design principles", link: "/design/composition/principles" },
      ],
    },
    {
      text: "Animation",
      items: [
        { text: "Types of web animation", link: "/design/animation/types" },
        { text: "Animation principles", link: "/design/animation/principles" },
        { text: "Main concepts", link: "/design/animation/concepts" },
      ],
    },
    {
      text: "Prototyping",
      items: [
        { text: "Analyze", link: "/design/prototype/analyze" },
        { text: "Pen and paper", link: "/design/prototype/paper" },
        { text: "Prototypes", link: "/design/prototype/prototyping" },
        { text: "Software", link: "/design/prototype/software" },
        { text: "Interaction principles", link: "/design/prototype/interaction" },
      ],
    },
  ];
}

function getGraphicsSidebar() {
  return [
    {
        text: 'Introduction',
        items: [
            { text: "Creating graphic assets", link: "/graphics/" },
        ]
    },
    {
      text: "Vector- and raster graphics",
      items: [
        { text: "File formats", link: "/graphics/vector-pixel/file-formats" },
        { text: "Using images in web", link: "/graphics/vector-pixel/using-images" },
      ],
    },
    {
      text: "Illustration",
      items: [
        { text: "Web illustration", link: "/graphics/illustration/web-illustration" },
        { text: "Pictography and icons", link: "/graphics/illustration/pictography" },
      ],
    },
    {
      text: "Infographics",
      items: [{ text: "Working with data", link: "/graphics/infographics/working-with-data" }],
    },
  ];
}

function get3dSidebar() {
  return [
    {
        text: 'Introduction',
        items: [
            { text: "3D graphics", link: "/3d/" },
        ]
    },
    {
      text: "Introduction to 3D-graphics",
      items: [
        { text: "Introduction", link: "/3d/intro/" },
        { text: "A brief history", link: "/3d/intro/history" },
        { text: "Software", link: "/3d/intro/software" },
      ],
    },
    {
      text: "Basics of Blender",
      items: [
        { text: "User interface", link: "/3d/blender/ui" },
        { text: "3D modelling", link: "/3d/blender/modelling" },
        { text: "materials", link: "/3d/blender/materials" },
        { text: "textures", link: "/3d/blender/textures" },
        { text: "lighting", link: "/3d/blender/lighting" },
        { text: "camera", link: "/3d/blender/camera" },
        { text: "rendering", link: "/3d/blender/rendering" },
        { text: "animation", link: "/3d/blender/animation"},
        { text: "simulations", link: "/3d/blender/simulations"},
      ],
    },
  ];
}

