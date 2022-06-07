import styles from './styles.module.scss'

const inputFieldText = (props) => {
  const { label } = props;

  return <div className={styles.formField}>
    <input type='text' className={styles.formInput} placeholder=" " />
    <label for="name" className={styles.formLabel} >{label}</label>
  </div>
}

export default inputFieldText;
