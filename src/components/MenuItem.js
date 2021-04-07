import React, { Component } from 'react';

class MenuItem extends Component {

    addCart = () => {
        this.props.addCart(this.props.item.id)
    }

    render() {
        const item = this.props.item
        return (
            <tr>
                <th scope="row">{this.props.index + 1}</th>
                <td>{item.name}</td>
                <td>{item.gram}g</td>
                <td>{item.price}com</td>
                <td>
                    <button onClick={this.addCart} className="btn btn-primary">Add</button>
                </td>
            </tr>
        );
    }
}

export default MenuItem;
//npm install bootstrap