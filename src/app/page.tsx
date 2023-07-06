import Card from "./components/card";
import Image from "next/image";
import styles from './page.module.css';
import Link from "next/link";

export default function Page() {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.btn} href="/entrar">Entrar</Link>
        <Link className={styles.btndark} href="/cadastro">Criar conta</Link>
      </nav>
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
