import styles from "./ProfileCard.module.css"

const ProfileCard = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.cardHead}>
                    <img src="../../public/eu.jpeg" alt="Milena" className={styles.img} />
                </div>

                <div className={styles.cardBody}>
                    <h3>Milena - Estudante de desenvolvimento de software</h3>
                    <p>Professora, me indica no seu emprego plis🙏🙏</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;