import React from 'react';
import './style.css';
import Result from './Result';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
class App extends React.Component {
  static defaultProps = {
    secret: Math.floor(Math.random() * 20) + 1,
  };

  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  doSomething() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <div>
              <label htmlFor="term">Guess Number between 1 to 20</label>
            </div>
            <input
              id="term"
              type="text"
              name="term"
              value={this.state.term}
              onChange={this.handleChange}
            />

            <Result term={this.state.term} secretNum={this.props.secret} />
            <button type="button" onClick={this.doSomething}>
              Play Again
            </button>
          </Box>
        </Container>

        {/* <div>
          <label htmlFor="term">Guess Number between 1 to 20</label>
        </div>
        <input
          id="term"
          type="text"
          name="term"
          value={this.state.term}
          onChange={this.handleChange}
        />

        <Result term={this.state.term} secretNum={this.props.secret} /> */}
      </div>
    );
  }
}
export default App;
