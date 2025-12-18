interface LabelProps {
  htmlFor: string;
  labelTitle: string;
  customStyle?: string;
}

function Label({ htmlFor, labelTitle, customStyle }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${customStyle} block text-base font-medium text-gray-600 mb-1`}
    >
      {labelTitle}
    </label>
  );
}

export default Label;
