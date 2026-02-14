export function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>JrJobFinder</h2>
    </nav>
  );
}
const styles = {
  nav: {
    padding: "1rem 2rem",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
  logo: {
    margin: 0
  }
}
