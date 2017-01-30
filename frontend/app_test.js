import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Overlay, Tooltip} from 'react-bootstrap';
import validator from 'validator';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
      this.handle = this.handle.bind(this);
    }
    handle(e) {
      this.setState({
        content: e.target.value
      });
      let amount = e.target.value
      if (validator.isInt(amount, { min: 25000,  max: 500000 })) {
        console.log(this.state);

        this.setState({
          show: false
        })
      } else {
        console.log(this.state);
        this.setState({
          show: true
        })
      }
    }
    render() {
        const sharedProps = {
          show: this.state.show,
          container: this,
          target: () => ReactDOM.findDOMNode(this.refs.haha)
        };
    return (
      <div>
      <h1>hahahaha</h1>
      <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
      <label>
          Name:
          <input ref="haha" type="text" value={this.state.content} onChange={this.handle} />
        </label>
        <Overlay {...sharedProps} placement="top">
          <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>
        </Overlay>
      </div>
      </div>
    );
  }
};
