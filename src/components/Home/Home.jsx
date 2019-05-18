import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = {
        count: 0,
        items: [
            'Arroz',
            'Feijão',
            'Batata',
            'Macarrão',
            'Tofu',
        ],
    }

    // constructor() {
    //     super();
    //     this.showCount = this.showCount.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <h1 className="titulo-home">{this.state.count}</h1>
                <input onClick={this.handleIncrement} type="submit" value="Increment" />
                {
                    this.state.count % 5 === 0
                    &&
                    <ul>
                        {this.state.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                }

            </div>


        );
    }
    // showCount() {
    //     console.log(this);
    // }
    showCount = () => {
        return this.state.count ? this.state.count : 'Zero';
    }
}

export default Home;