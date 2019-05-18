import React, { Component } from 'react';
import Product from './../Product/Product';

class ShoppingList extends Component {
    state = {
        items: [
            {
                name: 'Arroz',
                price: 3.22,
                code: 789456321,
                img: 'http://www.fumacensealimentos.com.br/midias/produto=96b836c5308c0ac95a9584dbf10e7d50.jpg',
            }, {
                name: 'Feijão',
                price: 4.34,
                code: 789456322,
                img: 'https://www.paodeacucar.com/img/uploads/1/66/574066.jpg',
            }, {
                name: 'Batata Doce',
                price: 7.27,
                code: 789456323,
                img: 'https://lojaam.com.br/media/catalog/product/cache/1/image/365x365/9df78eab33525d08d6e5fb8d27136e95/b/a/batata-doce-organica-tp_3131894838292396660f.jpg',
            }, {
                name: 'Macarrão',
                price: 4.99,
                code: 789456324,
                img: 'https://mambo.vteximg.com.br/arquivos/ids/231157/140276_Macarrao-Ninho-com-Ovos-Renata-500g.jpg',
            },
        ],
    }
    render() {
        return (
            <section>
                <h1>Shopping</h1>
                {this.state.items.map(item => <Product name={item.name} key={item.code} price={item.price} image={item.img} />)}
            </section>
        );
    }
}

export default ShoppingList;