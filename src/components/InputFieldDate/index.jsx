import styles from './styles.module.scss'

const inputFieldDate = (props) => {
  const { label } = props;

  return <div className={styles.formField}>
    <input type="date" className={styles.formInput} placeholder=" " />
    <label for="name" className={styles.formLabel} >{label}</label>
  </div>
}

export default inputFieldDate;
