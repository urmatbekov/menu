import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="col-md-6 m-auto">
                <ul className="list-group">
                    {this.props.cart.foods.map((item) => (
                        <li className="list-group-item d-flex justify-content-between" key={item.id} >
                            <span> {item.name}</span>
                            <span>{item.price}com</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-right">Total price: </p>
            </div >
        );
    }
}

export default Cart;