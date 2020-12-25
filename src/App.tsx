import Form from './components/form';
import Nav from './components/nav';
import List from './components/list';

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Form />
        <List />
      </div>
    </>
  );
};

export default App;
