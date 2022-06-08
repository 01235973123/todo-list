import styles from "./styles.module.scss";

const inputFieldText = (props) => {
  const { label, onChange, value, error } = props;

  return (
    <div className={styles.inputFieldText}>
      <div className={`${styles.formField} ${error && "error"}`}>
        <input
          type="text"
          className={styles.formInput}
          placeholder=" "
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
        />
        <label for="name" className={styles.formLabel}>
          {label}
        </label>
      </div>
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default inputFieldText;
