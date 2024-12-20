import {
    defineCollection,
    getCollection,
    type CollectionEntry,
} from "astro:content";

import { feedLoader } from "@ascorbic/feed-loader";

const artists = await getCollection("artists");

const artistLoaders: Record<string, CollectionEntry<any>> = Object.fromEntries(
    artists.map(({ data: { name, rss } }) => [
        name,
        defineCollection({
            loader: feedLoader({
                url: rss,
            }),
        }),
    ]),
);

export default artistLoaders;
