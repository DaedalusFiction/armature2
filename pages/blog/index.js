import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PublicationIndex from "../../components/layout/PublicationIndex";
import { db } from "../../firebase";
const category = "Design";

const index = ({ items }) => {
    return <PublicationIndex category={category} items={items} isGrid />;
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "blog");
    const itemsQuery = query(
        publicationsRef,
        where("categories", "array-contains", category),
        orderBy("dateUploaded", "desc")
    );

    const itemsSnapshot = await getDocs(itemsQuery);

    let items = [];
    itemsSnapshot.docs.forEach((doc, index) => {
        items = [...items, { data: doc.data(), id: doc.id }];
    });

    return {
        props: {
            items,
        },
    };
};

export default index;
