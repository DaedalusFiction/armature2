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
import { db } from "../../firebase";
import Post from "../../components/blog/Post";
import PageLayout from "../../components/layout/PageLayout";

const sidebarCategory = "Design";

const page = ({ sidebarItems, post }) => {
    return (
        <PageLayout name="">
            <Post
                post={post}
                sidebarCategory={sidebarCategory}
                sidebarItems={sidebarItems}
            />
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `blog/${context.params.id}`));
    let post = docSnap.data();

    const postsRef = collection(db, "blog");

    const sidebarItemsQuery = query(
        postsRef,
        where("categories", "array-contains", "Design"),
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
            post,
        },
    };
};

export default page;
