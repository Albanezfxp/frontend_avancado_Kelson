import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerSection}>
          <h3>UNIESP</h3>
          <p>
            Educação com foco em inovação, impacto social e a formação de
            profissionais preparados para os desafios de amanhã.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Links úteis</h4>
          <ul>
            <li><a href="/a-faculdade">A Faculdade</a></li>
            <li><a href="/dpo-lgpd">DPO & LGPD</a></li>
            <li><a href="/noticias">Notícias</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contato</h4>
          <p>
            Rua Professor Miguel Couto, 120<br/>João Pessoa - PB
          </p>
          <p>Telefone: (83) 3333-1234</p>
          <p>Email: atendimento@uniesp.edu.br</p>
        </div>

      </div>

      <div className={styles.footerBottom}>
        © 2025 UNIESP. Todos os direitos reservados.
      </div>
    </footer>
  );
}