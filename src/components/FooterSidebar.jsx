import styles from "./FooterSidebar.module.css";
function FooterSidebar() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default FooterSidebar;
