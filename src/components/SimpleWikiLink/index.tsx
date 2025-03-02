import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAllDocsData} from "@docusaurus/plugin-content-docs/client";
import Layout from '@theme/Layout';
import clsx from "clsx";
import Heading from "@theme/Heading";

interface RouteParams {
    slug: string;
}

const SimpleWikiLink = () => {
    const {slug: slugToSearch} = useParams<RouteParams>();
    const allDocsData = useAllDocsData();

    useEffect(() => {
        if (!slugToSearch || !allDocsData) {
            console.error("No 'slug' provided in query parameters or docs data unavailable.");
            return;
        }

        let docPath = null;
        for (const docData of Object.values(allDocsData)) {
            const sortedVersions = [...docData.versions].sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            for (let i = sortedVersions.length - 1; i >= 0; i--) {
                const version = sortedVersions[i];
                const matchingDoc = version.docs.find((doc) => {
                    const originalSlug = doc.id.startsWith("wiki/")
                        ? doc.id.replace("wiki/", "")
                        : null;

                    if (!originalSlug) return false;

                    const slug = originalSlug.endsWith("/index")
                        ? originalSlug.replace("/index", "")
                        : originalSlug;

                    return slug === slugToSearch;
                });

                if (matchingDoc) {
                    docPath = matchingDoc.path;
                    break;
                }
            }
        }

        console.log(`Found docPath: ${docPath}`);
        if (docPath) {
            window.location.href = docPath;
        } else {
            console.error("No 'slug' provided in query parameters.");
        }
    }, [slugToSearch, allDocsData]);

    return (
        <Layout>
            <main className={clsx('container margin-vert--xl')}>
                <div className="row">
                    <div className="col col--6 col--offset-3">
                        <Heading as="h1" className="hero__title">
                            Searching wiki page for <code>{slugToSearch}</code>...
                        </Heading>
                        <p>If you don't get redirected, I'm sorry. Search for yourself &lt;3</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default SimpleWikiLink;
