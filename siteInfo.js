// 1. Meta

const siteName = "ARMATURE";

const contactConfig = {
    website: "Flavor Website Contact Form",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

const membership = {
    image: {
        url: "/images/cocktail1.webp",
        alt: "stock",
    },
};

const uploadConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Author", type: "text", value: "" },
        {
            name: "Summary",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Image Caption (title and artist)", type: "text", value: "" },
    ],
};

const uploadCategories = [
    {
        name: "Design",
        href: "/blog/design",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt upload image text",
        },
        subCategories: [
            {
                name: "Art",
                href: "/blog/design/art",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
        ],
    },
];

// 2. Layout

export { siteName, contactConfig, membership, uploadConfig, uploadCategories };
