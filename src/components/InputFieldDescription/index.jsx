import styles from "./styles.module.scss";

const inputFieldDescription = (props) => {
  const { label, onChange, value, error } = props;

  return (
    <div className={styles.inputFieldDescription}>
      <div className={`${styles.formField} ${error && "error"}`}>
        <textarea
          rows="6"
          cols="50"
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

export default inputFieldDescription;
