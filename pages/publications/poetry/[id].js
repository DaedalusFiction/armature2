import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Publication from "../../../components/layout/Publication";

const sidebarCategory = "Mixed Media";

const page = ({ sidebarItems, publication }) => {
    return (
        <Publication
            publication={publication}
            sidebarCategory={sidebarCategory}
            sidebarItems={sidebarItems}
        />
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `publications/${context.params.id}`));
    let publication = docSnap.data();

    const publicationsRef = collection(db, "publications");

    const sidebarItemsQuery = query(
        publicationsRef,
        where("categories", "array-contains", "Mixed Media"),
        orderBy("dateUploaded", "desc"),
        limit(2)
    );

    const sidebarItemsSnapshot = await getDocs(sidebarItemsQuery);

    let sidebarItems = [];
    sidebarItemsSnapshot.docs.forEach((doc, index) => {
        sidebarItems = [...sidebarItems, { data: doc.data(), id: doc.id }];
    });

    return {
        props: {
            sidebarItems,
            publication,
        },
    };
};

export default page;
