import styles from './styles.module.scss'

const buttonSubmit = (props) => {
    const { text } = props;

    return <><button className={styles.buttonSubmit}>{text}</button></>
}

export default buttonSubmit;
