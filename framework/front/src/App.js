import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCountry, deleteCountry } from './actionCreators/countriesActions';
import InputForm from './components/InputForm';
import Countries from './components/Countries';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      countries: '' 
    }
  }

  componentDidMount = () => {
    console.log('component did mount');
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      countries: nextProps.addedCountry
    })
  }

  addCountry = (event) => {
    let inp = document.querySelector('.value');
    let val = inp.value.trim();
    if(val !== null){
      this.props.addCountry(val);
      inp.value = "";//resetting the value;
    }
  }


  render() {
    console.log('this.state', this.state)
    console.log('this props', this.props)
    return (
      <div className="App">
        <InputForm newCountry={this.addCountry} />
        <Countries countries={this.state.countries} />
      </div>
    );
  }

}

//the following goes under, component is closed

const mapStateToProps = (state) => {
    return {
        allprops: state,
        addedCountry: state.addCountry
    };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    addCountry: (value) => dispatch(addCountry(value)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
