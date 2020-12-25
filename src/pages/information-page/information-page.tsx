import {useHistory} from 'react-router-dom';

const InformationPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h2>Information page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        molestiae, possimus accusamus quidem dignissimos earum odio doloremque
        et id asperiores?
      </p>
      <button
        className="waves-effect waves-light btn-large"
        onClick={() => {
          history.push('/');
        }}>
        To HomePage
      </button>
    </>
  );
};

export default InformationPage;
