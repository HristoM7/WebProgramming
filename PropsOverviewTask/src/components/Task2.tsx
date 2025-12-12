export default function Task2({ firstName, lastName, title, image, children }:any) {
  return (
    <header id="user" className="card">
      <h2 className="name">{firstName} {lastName}</h2>
      <h3 className="children">{children}</h3>
      {image && <img src={image} alt="A template" className="avatar" />}
      <p className="title">{title}</p>
    </header>
  )
}
