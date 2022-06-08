import styles from './styles.module.scss'

const buttonSubmit = (props) => {
    const { text, handleSubmit } = props;

    return <><button onClick={handleSubmit} className={styles.buttonSubmit}>{text}</button></>
}

export default buttonSubmit;
