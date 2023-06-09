import Head from "next/head";
import { useRouter } from "next/router";
import { siteName } from "../../siteInfo";

const Meta = () => {
    const router = useRouter();
    const basePath = router.pathname.split("/")[1];
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{siteName}</title>
                ) : (
                    <title>{`${basePath.toUpperCase()} - ${siteName}`}</title>
                )}

                <link
                    rel="preload"
                    href="/fonts/AvantGarde.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                ></link>
                <link
                    rel="preload"
                    href="/fonts/KumbhSans-VariableFont_YOPQ,wght.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                ></link>
                <meta
                    data-n-head="ssr"
                    data-hid="description"
                    name="description"
                    content="Armature"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:card"
                    content="Armature"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:title"
                    content="Armature"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:description"
                    content="Armature"
                />
                <meta
                    data-n-head="ssr"
                    name="twitter:creator"
                    content="Armature"
                />

                <meta data-n-head="ssr" name="og:title" content="Armature" />
                <meta data-n-head="ssr" name="og:type" content="website" />
                <meta
                    data-n-head="ssr"
                    name="og:url"
                    content="https://armature.studio"
                />

                <meta
                    data-n-head="ssr"
                    name="og:description"
                    content="Armature"
                />
                <meta
                    data-n-head="ssr"
                    name="og:site_name"
                    content="Armature"
                />
                <link
                    data-n-head="ssr"
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicons/apple-touch-icon.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicons/favicon-32x32.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicons/favicon-16x16.png"
                />
                <link
                    data-n-head="ssr"
                    rel="icon"
                    type="image/x-icon"
                    href="/images/favicons/favicon.ico"
                ></link>
            </Head>
        </div>
    );
};

export default Meta;
