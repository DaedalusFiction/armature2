import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PostsIndex from "../../components/blog/PostsIndex";
import { db } from "../../firebase";
// import PublicationIndex from "../../../components/layout/PublicationIndex";

const category = "Design";

const index = ({ posts }) => {
    return <PostsIndex category={category} posts={posts} />;
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
