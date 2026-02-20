interface Post {
  id: number;
  title: string;
  description: string;
}

interface ContentProps {
  posts: Post[];
}

import PostList from './PostList.tsx';

function Content({ posts }: ContentProps) {
  return (
    <article className="content">
      <h2>Latest Posts</h2>
      <PostList posts={posts} />
    </article>
  );
}

export default Content;
