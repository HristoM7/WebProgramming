interface Post {
  id: number;
  title: string;
  description: string;
}

interface PostListProps {
  posts: Post[];
}

import PostItem from './PostItem.tsx';

function PostList({ posts }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
