function Sidebar() {
  const categories = [
    "Technology",
    "Science",
    "Programming",
    "Web Development",
    "React"
  ];

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
