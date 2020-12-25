import {ITodo} from '../interfaces';

type ListProps = {
  data: Array<ITodo>;
  clickHandler: (id: number) => void;
  deleteHandler: (id: number) => void;
};

const List: React.FC<ListProps> = (props) => {
  const {data, clickHandler, deleteHandler} = props;

  if (data.length === 0) {
    return <p>The are no ToDos to do</p>;
  }

  const onDeleteClick = (
    evt: React.MouseEvent<HTMLIFrameElement>,
    id: number
  ) => {
    evt.preventDefault();
    deleteHandler(id);
  };

  return (
    <ul className="col">
      {data.map(({id, value, completed}) => (
        <li className="todo" key={id}>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => clickHandler(id)}
            />
            <span>{value}</span>
            <i
              className="material-icons red-text"
              onClick={(evt: React.MouseEvent<HTMLIFrameElement>) =>
                onDeleteClick(evt, id)
              }>
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default List;
