import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer style={styles.footer}>
        <div>
            <p>Email: gauravvkwitcse@gmail.com</p>
        </div>
        <p>© 2024 RateThatFilm. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "",
    color: "#000000",
    padding: "10px 0",
    textAlign: "center",
    width: "100%",
    bottom: 0,
  },
};

export default Footer;