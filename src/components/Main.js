import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {

  render() {
    return (
      <Switch>
        {
          this.props.views.map((view) => {
            return <Route key={view.path} path={view.path} exact={view.path==='/'} component={view.component}/>;
          })
        }
      </Switch>
    );
  }
}

export default Main;