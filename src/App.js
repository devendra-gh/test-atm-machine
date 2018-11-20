import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oneRupeeNote: 0,
      twoRupeeNote: 0,
      fiveRupeeNote: 0,
      tenRupeeNote: 0,
      twentyRupeeNote: 0,
      fiftyRupeeNote: 0,
      hundredRupeeNote: 0,
      twoHundredRupeeNote: 0,
      fiveHundredRupeeNote: 0,
      twoThoudandRupeeNote: 0,
      inputValue: 0,
      totalNotes: 0
    }

  }

  onBlurHandler = (event) => {
    let inputValue = event.target.value;

    this.setState({
      inputValue
    });
  }

  onClickHandler = () => {
    let { inputValue } = this.state;

    let _oneRupeeNote = 0, _twoRupeeNote = 0, _fiveRupeeNote = 0, _tenRupeeNote = 0, _twentyRupeeNote = 0, 
    _fiftyRupeeNote = 0, _hundredRupeeNote = 0, _twoHundredRupeeNote = 0, _fiveHundredRupeeNote = 0, 
    _twoThoudandRupeeNote = 0;

    let _inputValue = inputValue;

    _twoThoudandRupeeNote = parseInt(_inputValue / 2000);
    if(_twoThoudandRupeeNote) {
      _inputValue = _inputValue - _twoThoudandRupeeNote * 2000;
    }

    _fiveHundredRupeeNote = parseInt(_inputValue / 500);
    if(_fiveHundredRupeeNote) {
      _inputValue = _inputValue - _fiveHundredRupeeNote * 500;
    }

    _twoHundredRupeeNote = parseInt(_inputValue / 200);
    if(_twoHundredRupeeNote) {
      _inputValue = _inputValue - _twoHundredRupeeNote * 200;
    }

    _hundredRupeeNote = parseInt(_inputValue / 100);
    if(_hundredRupeeNote) {
      _inputValue = _inputValue - _hundredRupeeNote * 100;
    }

    _fiftyRupeeNote = parseInt(_inputValue / 50);
    if(_fiftyRupeeNote) {
      _inputValue = _inputValue - _fiftyRupeeNote * 50;
    }

    _twentyRupeeNote = parseInt(_inputValue / 20);
    if(_twentyRupeeNote) {
      _inputValue = _inputValue - _twentyRupeeNote * 20;
    }

    _tenRupeeNote = parseInt(_inputValue / 10);
    if(_tenRupeeNote) {
      _inputValue = _inputValue - _tenRupeeNote * 10;
    }

    _fiveRupeeNote = parseInt(_inputValue / 5);
    if(_fiveRupeeNote) {
      _inputValue = _inputValue - _fiveRupeeNote * 5;
    }

    _twoRupeeNote = parseInt(_inputValue / 2);
    if(_twoRupeeNote) {
      _inputValue = _inputValue - _twoRupeeNote * 2;
    }

    _oneRupeeNote = _inputValue;

    let _totalNotes = _twoThoudandRupeeNote + _fiveHundredRupeeNote +_twoHundredRupeeNote + _hundredRupeeNote + 
    _fiftyRupeeNote + _twentyRupeeNote +_tenRupeeNote + _fiveRupeeNote + _twoRupeeNote + _oneRupeeNote;
    
    this.setState({
      twoThoudandRupeeNote: _twoThoudandRupeeNote,
      fiveHundredRupeeNote: _fiveHundredRupeeNote,
      twoHundredRupeeNote: _twoHundredRupeeNote,
      hundredRupeeNote: _hundredRupeeNote,
      fiftyRupeeNote: _fiftyRupeeNote,
      twentyRupeeNote: _twentyRupeeNote,
      tenRupeeNote: _tenRupeeNote,
      fiveRupeeNote: _fiveRupeeNote,
      twoRupeeNote: _twoRupeeNote,
      oneRupeeNote: _oneRupeeNote,
      totalNotes: _totalNotes
    });

  }

  render() {
    let { 
      oneRupeeNote, twoRupeeNote, fiveRupeeNote, tenRupeeNote, twentyRupeeNote, fiftyRupeeNote,
      hundredRupeeNote, twoHundredRupeeNote, fiveHundredRupeeNote, twoThoudandRupeeNote, totalNotes, inputValue
    } = this.state;

    return (
      <div className='wrapper'>
        <header>
          <h1>ATM Money Dispenser</h1>
        </header>

        <section className='form-container clearfix'>

            <div className='left-section clearfix'>
              <div className='form-section'>
                <h2>Welcome to ATM</h2>
                <div className='form-group'>
                  <label className='form-label'>Enter the Amount</label>
                  <input className='form-control' 
                    onBlur={this.onBlurHandler}
                    autoFocus />
                </div>
                <div className='form-group'>
                  <button
                    onClick={this.onClickHandler}
                    className='btn-default'>
                      Get Money
                  </button>
                </div>
              </div>
            </div>

            <div className='right-section clearfix'>
              <h3>You will get following amount</h3>
              <ul className='notes-list'>
                <li>{ oneRupeeNote } Notes of Rs 1</li>
                <li>{ twoRupeeNote } Notes of Rs 2</li>
                <li>{ fiveRupeeNote } Notes of Rs 5</li>
                <li>{ tenRupeeNote } Notes of Rs 10</li>
                <li>{ twentyRupeeNote } Notes of Rs 20</li>
                <li>{ fiftyRupeeNote } Notes of Rs 50</li>
                <li>{ hundredRupeeNote } Notes of Rs 100</li>
                <li>{ twoHundredRupeeNote } Notes of Rs 200</li>
                <li>{ fiveHundredRupeeNote } Notes of Rs 500</li>
                <li>{ twoThoudandRupeeNote } Notes of Rs 2000</li>
              </ul>
              <div className='notes-total-label'>Total notes dispenser: { totalNotes }</div>
            </div>

        </section>

      </div>
    );
  }
}

export default App;
