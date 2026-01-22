function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Blog Site. All rights reserved.</p>
      <p>Built with React and Vite</p>
    </footer>
  );
}

export default Footer;
