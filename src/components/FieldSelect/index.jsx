import styles from "./styles.module.scss";

const fieldSelect = (props) => {
  const { label, options, onChange, value } = props;

  return (
    <div className={styles.formField}>
      <select
        name="cars"
        className={styles.formInput}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {options.map((item) => {
          return <option value={item.value}  selected={value === item.value ?? 'selected'}>{item.name}</option>;
        })}
      </select>
      <label for="name" className={styles.formLabel}>
        {label}
      </label>
    </div>
  );
};

export default fieldSelect;
