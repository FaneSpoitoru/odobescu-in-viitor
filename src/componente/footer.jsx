import "../pages_css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Liceul Exemplu — Toate drepturile rezervate.</p>
      <p>Creat cu 💙 de elevii noștri</p>
    </footer>
  );
}


