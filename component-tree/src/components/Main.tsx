interface Post {
  id: number;
  title: string;
  description: string;
}

interface MainProps {
  posts: Post[];
}

import Sidebar from './Sidebar.tsx';
import Content from './Content.tsx';

function Main({ posts }: MainProps) {
  return (
    <main className="main">
      <div className="main-container">
        <Sidebar />
        <Content posts={posts} />
      </div>
    </main>
  );
}

export default Main;
