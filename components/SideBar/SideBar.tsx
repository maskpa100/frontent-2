import styles from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <>
      <p className={styles.p}>SideBar</p>
      <p className={styles.p}>
        SideBar <span className={styles.span}>fff</span>
      </p>
    </>
  );
}
