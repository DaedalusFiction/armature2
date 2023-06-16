import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ImageWithFade from "../general/ImageWithFade";
import ServicePreview from "./ServicePreview";
import theme from "../../styles/themes/theme";

const services = [
    {
        header: "Brand & Identity",
        flavor: "Find your Voice",
        description: "Develop your Brand Strategy",
        points: ["Logo Design", "Brand Narratives", "Style Guides"],
        src: "/images/confusion.png",
    },
    {
        header: "Website Design & Development",
        flavor: "Set the Stage",
        description: "Craft a website that can keep up with your passion",
        points: [
            "Fully Custom Website",
            "Technical SEO",
            "Audited Performance",
        ],
        src: "/images/hellish.jpg",
    },
    {
        header: "Content & Social Media",
        flavor: "Tell your Story",
        description:
            "Establish your online presence and become a leader in your industry",
        points: [
            "Email Newsletter, blog posts, videos, podcasts",
            "Social Media Engagement",
            "Thought Leadership and Outreach",
        ],
        src: "/images/paradiso.jpg",
    },
];

const ServicesSection = () => {
    return (
        <Box sx={{ background: theme.palette.primary.main }}>
            {services.map((service, index) => {
                return (
                    <ServicePreview
                        key={index}
                        service={service}
                        reversed={index % 2 === 0}
                    />
                );
            })}
        </Box>
    );
};

export default ServicesSection;
