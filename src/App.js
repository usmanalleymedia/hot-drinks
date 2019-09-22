import React from 'react';
import lemontea from './lemontea.svg';
import choc from './choc.svg';
import coffee from './coffee.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenOutput: 'Please use the buttons above to select a drink',
      lemonTeaButton: false,
      coffeeButton: false,
      hotChocolateButton: false,
    }
  }

  makeDrink = drinktype => {
    const button = document.getElementById(drinktype);
    button.classList.toggle('active');
    this.setState({lemonTeaButton: true, coffeeButton: true, hotChocolateButton: true })
    this.boilWater();
    this.brewDrink(drinktype);
    this.pourDrink(drinktype);
    this.addExtras(drinktype);
    this.resetMachine(drinktype);
  }

  boilWater() {
    setTimeout(() => {
      this.changeScreenText('Boiling water...');
    }, 2000);
  }

  brewDrink(drinktype) {
    var message;
    if (drinktype === "lemontea") {
      message = 'Steeping tea in water...';
    }
    else if (drinktype === "coffee") {
      message = 'Brewing coffee grounds...';
    }
    else {
      message = "Adding chocolate powder to water...";
    }
    setTimeout(() => {
      this.changeScreenText(message);
    }, 4000);
  }

  pourDrink(drinktype) {
    var message;
    if (drinktype === "lemontea") {
      message = 'Pouring tea into cup...';
    }
    else if (drinktype === "coffee") {
      message = 'Pouring coffee into cup...';
    }
    else {
      message = "Pouring hot chocolate into cup...";
    }
    setTimeout(() => {
      this.changeScreenText(message);
      const mugfill = document.getElementById('mugfill');
      mugfill.classList.toggle('filled');
      mugfill.classList.toggle(drinktype);
    }, 6000);
  }

  addExtras(drinktype) {
    var message;
    if (drinktype === "lemontea") {
      message = 'Adding lemon...';
      setTimeout(() => {
        this.changeScreenText(message);
      }, 8000);
    }
    else if (drinktype === "coffee") {
      message = 'Adding sugar and milk...';
      setTimeout(() => {
        this.changeScreenText(message);
      }, 8000);
    }
  }

  resetMachine(drinktype) {
    setTimeout(() => {
      this.changeScreenText('Finished...');
    }, 10000);
    setTimeout(() => {
      this.changeScreenText('Please use the buttons above to select a drink');
    }, 12000);
    setTimeout(() => {
      this.setState({lemonTeaButton: false, coffeeButton: false, hotChocolateButton: false })
      const button = document.getElementById(drinktype);
      button.classList.toggle('active');
      const mugfill = document.getElementById('mugfill');
      mugfill.classList.toggle('filled');
      mugfill.classList.toggle(drinktype);
    }, 12000);
  }

  changeScreenText(message) {
    this.setState({screenOutput: message})
  }

render() {
  return (
    <div>
    <div className="machine">
      <header className="machinetop">
      </header>
      <section
      className="controls">
      <button
      id="lemontea"
      onClick={() => this.makeDrink('lemontea') }
      disabled={this.state.lemonTeaButton}
      >
        <img src={lemontea} className="logo" style={{width: 30}} alt="lemon tea" />
        <span>Lemon Tea</span>
      </button>
      <button
      id="coffee"
      onClick={() => this.makeDrink('coffee') }
      disabled={this.state.coffeeButton}
      >
      <img src={coffee} className="logo" style={{width: 30}} alt="coffee" />
        <span>Coffee</span>
        </button>
        <button
      id="hotchocolate"
      onClick={() => this.makeDrink('hotchocolate') }
      disabled={this.state.hotChocolateButton}
      >
      <img src={choc} className="logo" style={{width: 30}} alt="hot chocolate" />
        <span>Hot Chocolate</span>
      </button>
      </section>
      <section
      className="screenouter">
      <div className="screen">
      <p>{this.state.screenOutput}</p>
      </div>
      </section>
      <section className="nozzle">
    nozzled
      </section>
      <section className="cup">
      <div className='mug'></div>
      <div id='mugfill'></div>
      </section>
      <section className="bottom">
      </section>
    </div>
      <div className="credits">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"  title="Flaticon">www.flaticon.com</a></div>
      </div>
  );
}

}

export default App;
