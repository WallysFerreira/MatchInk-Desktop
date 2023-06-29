import Card from "./components/card";
import Image from "next/image";
import styles from './page.module.css';

export default function Page() {
  return (
    <section className={styles.container}>
      <Image
        className={styles.img}
        src='/logo.png'
        alt='Logo'
        height={1000}
        width={1000}
      />
      <Card />
  </section>
  );
}
