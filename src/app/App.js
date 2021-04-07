import React, { Component } from 'react';
import Cart from '../components/Cart';
import MenuList from '../components/MenuList';

class App extends Component {

    state = {
        cart: {
            foods: []
        },
        menu: [
            {
                id: 12,
                name: "Manty",
                gram: 300,
                price: 120
            },
            {
                id: 23,
                name: "Shashlyk",
                gram: 120,
                price: 70
            },
            {
                id: 24,
                name: "Plov",
                gram: 300,
                price: 150
            },
            {
                id: 91,
                name: "Lagman",
                gram: 300,
                price: 130
            },
        ]
    }

    addCart = (id) => {
        this.setState((state) => {
            const food = state.menu.find((item) => item.id === id)
            const foods = [...state.cart.foods, { ...food }]
            return {
                cart: {
                    foods
                }
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Menu</h1>
                <MenuList addCart={this.addCart} menu={this.state.menu} />
                <Cart cart={this.state.cart}/>
            </div>
        );
    }
}

export default App;