import { default as ReactSelect, components } from "react-select";
function Option(props) {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
          className="mr-2 scale-150 accent-main-1 checked:text-accent-blue"
        />
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
}

export default Option;
