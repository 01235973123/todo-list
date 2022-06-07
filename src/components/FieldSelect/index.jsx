import styles from './styles.module.scss'

const fieldSelect = (props) => {
  const { label, options } = props;

  return <div className={styles.formField}>
    <select name="cars" className={styles.formInput}>
      {options.map(item => { return <option value={item.value}>{item.name}</option> })}
    </select>
    <label for="name" className={styles.formLabel} >{label}</label>
  </div>
}

export default fieldSelect;
