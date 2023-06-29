import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PostsIndex from "../../components/blog/PostsIndex";
import { db } from "../../firebase";
import PageLayout from "../../components/layout/PageLayout";
import { Container, Typography } from "@mui/material";

const category = "Design";

const index = ({ posts }) => {
    return (
        <PageLayout name="Blog">
            {/* <DotRing /> */}
            <Container>
                <Typography variant="h5">Latest Posts:</Typography>
                <br />
                <PostsIndex category={category} posts={posts} isGrid />
            </Container>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "blog");
    const postsQuery = query(
        publicationsRef,
        where("categories", "array-contains", category),
        orderBy("dateUploaded", "desc")
    );

    const postsSnapshot = await getDocs(postsQuery);

    let posts = [];
    postsSnapshot.docs.forEach((doc, index) => {
        posts = [...posts, { data: doc.data(), id: doc.id }];
    });

    return {
        props: {
            posts,
        },
    };
};

export default index;
