interface Post {
  id: number;
  title: string;
  description: string;
}

interface PostItemProps {
  post: Post;
}

function PostItem({ post }: PostItemProps) {
  return (
    <article className="post-item">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </article>
  );
}

export default PostItem;
