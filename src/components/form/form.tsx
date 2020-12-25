const Form = () => {
  return (
    <>
      <div className="col s8">
        <form className="col">
          <div className="input-field">
            <input value="" id="todo-field" type="text" className="validate" />
            <label className="active" htmlFor="todo-field">
              Your ToDo
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
