//A reusable form component for input fields with labels, simplifying form creation.

const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div classame="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default FormRow;
