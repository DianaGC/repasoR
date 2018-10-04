import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.jsx'

class App extends Component {
    state = {
        person: [
            {name: 'Max', aqe: 28},
            {name: 'Manu', aqe: 29},
        ],
        otherState:'same other value',
        showPersons: false

    };
    switchNameHandler = (newNAme) => {
        this.setState({
            person: [
                {name: newNAme, aqe: 28},
                {name: 'Manulo', aqe: 29}
            ]
        })

    };

    nameChangeHandler = (event) => {
        this.setState({
            person: [
                {name: 'Max', aqe: 28},
                {name: event.target.value, aqe: 29}
            ]
        })
    };

    togglePersonsHandle =() =>{
        const doesShow = this.state.showPersons;
        this.getState({showPersons:!doesShow})

    }

    render() {
        return (
            <div className="App">
                {/*<button onClick={this.switchNameHandler.bind(this, 'Diana')}>Swich Name</button>*/}
                <button onClick={this.togglePersonsHandle}>Swich Name</button>
                <div>
                    {this.state.person.map(person =>{
                        return <Person name={person.name}
                                       age={person.age}/>
                    })}

                    {/*<Person*/}
                        {/*name={this.state.person[1].name}*/}
                        {/*age={this.state.person[1].age}*/}
                        {/*click={this.switchNameHandler.bind(this, 'Diana')}*/}
                        {/*changed={this.nameChangeHandler}>Hoola</Person>*/}
                </div>
            </div>
        );
    }
}

export default App;
