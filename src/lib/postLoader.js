import { posts as postsData } from '../posts/index.js';

export async function loadAllPosts() {
    const posts = postsData.map(post => ({
        slug: post.slug,
        metadata: post.metadata,
        content: post.content,
    }));

    // Sort by date descending
    posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

    return posts;
}

export async function loadPostBySlug(slug) {
    const post = postsData.find(p => p.slug === slug);

    if (!post) {
        return null;
    }

    return {
        slug: post.slug,
        metadata: post.metadata,
        content: post.content,
    };
}
