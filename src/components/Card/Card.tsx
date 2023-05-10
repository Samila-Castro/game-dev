import styles from "./Card.module.css";

export const Card = () => (
  <div className={styles.cardList}>
    <article className={styles.card}>
      <figure className={styles.cardIimage}>
        <img
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85"
          alt="An orange painted blue, cut in half laying on a blue background"
        />
      </figure>
      <div className={styles.cardHeader}>
        <h4>When life gives you oranges</h4>
        <p>Lorem ipsun nerd tu altos delerium man</p>
      </div>
      <div className={styles.cardFooter}></div>
    </article>
  </div>
);
