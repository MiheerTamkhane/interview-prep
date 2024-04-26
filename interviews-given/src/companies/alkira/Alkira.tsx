import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ErrorMsg = () => {
  return <p>Data not found!</p>;
};

type List = {
  name: string;
  age: string;
};

type AddItemFormParams = {
  onError: React.Dispatch<React.SetStateAction<boolean>>;
  onSetList: React.Dispatch<React.SetStateAction<List[]>>;
};
const AddItemForm = ({ onError, onSetList }: AddItemFormParams) => {
  const { register, handleSubmit, resetField } = useForm<List>();
  const onSubmit: SubmitHandler<List> = (data) => {
    const { name, age } = data;
    if (!name && !age) {
      onError(true);
    }
    onSetList((prevList) => [...prevList, { name, age }]);
    resetField("name");
    resetField("age");
  };
  return (
    <div id="list-item">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        <input type="number" {...register("age", { required: true })} />
        <input type="submit" className="submit-btn" />
      </form>
    </div>
  );
};

const AddToListForm = () => {
  const [list, setList] = useState<List[]>([]);
  const [error, setError] = useState(false);
  return (
    <div id="wrapper">
      <div className="container">
        <div className="row">
          <article className="col-md-12">
            <h1 className="text-center">Show the itmes in the List here</h1>
            <h2 className="text-center">
              Adding a dynamically generated list item
              <AddItemForm onError={setError} onSetList={setList}></AddItemForm>
            </h2>
            <div id="app" className="app-container">
              {error && <ErrorMsg />}
              {list.length > 0 && (
                <ul>
                  {list.map((item) => (
                    <li key={item.name}>
                      Name: {item.name}, Age: {item.age}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

const Alkira = () => {
  return (
    <div>
      <AddToListForm />
    </div>
  );
};

export default Alkira;
