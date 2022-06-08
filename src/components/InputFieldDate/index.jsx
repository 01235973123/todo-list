import styles from "./styles.module.scss";
import moment from 'moment';

const inputFieldDate = (props) => {
  const { label, onChange, value, error } = props;

  return (
    <div className={styles.inputFieldDate}>
      <div className={`${styles.formField} ${error && 'error'}`}>
        <input
          type="date"
          className={styles.formInput}
          placeholder=" "
          onChange={(e) => {
            onChange(e.target.value);
          }}
          min={moment().format('YYYY-MM-DD')}
          value={value}
        />
        <label for="name" className={styles.formLabel}>
          {label}
        </label>
      </div>
      {error && <p className='text-error'>{error}</p>}
    </div>
  );
};

export default inputFieldDate;
