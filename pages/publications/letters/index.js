import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import { db } from "../../../firebase";
import PublicationIndex from "../../../components/layout/PublicationIndex";

const category = "Letters";

const index = ({ items }) => {
    return <PublicationIndex category={category} items={items} />;
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
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
