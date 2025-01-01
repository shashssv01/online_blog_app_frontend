import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from 'context';

const PublicRoute = (props) => {
  const {
    state: { isLoggedIn },
  } = useContext(GlobalContext);

  if (isLoggedIn) {
    // const userType = localStorage.getItem('usertype');
    return (
      <Route>
        <Redirect exact to='/' />
      </Route>
    );
  }

  return (
    <Route {...props}></Route>
  );
};

export default PublicRoute;