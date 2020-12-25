import {useState} from 'react';

type FormProps = {
  onFormSubmit: (value: string) => void;
};

const Form: React.FC<FormProps> = (props) => {
  const {onFormSubmit} = props;
  const [value, setValue] = useState('');

  const onValueChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onFormSubmit(value);
    setValue('');
  };

  return (
    <div className="col s8">
      <form className="col" onSubmit={submitHandler}>
        <div className="input-field">
          <input
            value={value}
            id="todo-field"
            type="text"
            className="validate"
            onChange={onValueChange}
          />
          <label className="active" htmlFor="todo-field">
            Your ToDo
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
