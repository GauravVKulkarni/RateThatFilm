import '../styles/Header.css';

const Header = () => {
  return (
    <>
    <header style={styles.header}>
        <h3>
          RateThatFilm
        </h3>
    </header>
    </>
  );
};

const styles = {
    header: {
      backgroundColor: "#282c34",
      color: "white",
      textAlign: "center",
      fontSize: "1.6rem",
    },
  };
  

export default Header;