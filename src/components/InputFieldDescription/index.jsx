import styles from './styles.module.scss'

const inputFieldDescription = (props) => {
  const { label } = props;

  return <div className={styles.formField}>
    <textarea rows="6" cols="50" className={styles.formInput} placeholder=" " />
    <label for="name" className={styles.formLabel} >{label}</label>
  </div>
}

export default inputFieldDescription;
