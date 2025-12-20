interface LabelProps {
  htmlFor: string;
  labelTitle: string;
  customStyle?: string;
  isMandatory?: boolean;
}

function Label({ htmlFor, labelTitle, customStyle, isMandatory }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${customStyle} block text-base font-medium text-gray-600 mb-1`}
    >
      {labelTitle} <span className="text-red-500">{isMandatory && "*"}</span>
    </label>
  );
}

export default Label;
