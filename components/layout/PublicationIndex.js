import React from "react";
import PageLayout from "./PageLayout";
import { Container, Grid } from "@mui/material";
import PublicationPreview from "../previews/PublicationPreview";

const PublicationIndex = ({ category, items, isGrid }) => {
    return (
        <PageLayout name={category}>
            <Container maxWidth={isGrid ? "lg" : "md"}>
                <Grid className="section" container>
                    {items.map((item, index) => {
                        return (
                            <Grid key={index} item xs={isGrid ? 4 : 12}>
                                <PublicationPreview
                                    item={item.data}
                                    id={item.id}
                                    category={category}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default PublicationIndex;
