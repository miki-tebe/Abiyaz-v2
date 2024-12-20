import { defineCollection, getCollection, z } from 'astro:content';

import { file } from 'astro/loaders';
import artistLoaders from '@/content/artist-loader';

const artists = defineCollection({
    loader: file("src/data/artists.json"),
    schema: z.object({
        id: z.number(),
        name: z.string(),
        rss: z.string(),
    })
});


export const collections = { artists, ...artistLoaders };