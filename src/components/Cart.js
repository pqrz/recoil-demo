import React, { useContext } from 'react'
import { SideSheet, Paragraph, Table, Button } from 'evergreen-ui'
import { useRecoilValue } from 'recoil'

import { AppContext } from '../contexts'
import { cart } from '../store/atoms'

import CartProduct from './CartProduct'

const Cart = () => {
    const { cartShown, setCartShown } = useContext(AppContext)

    const products = useRecoilValue(cart)

    const renderCartProducts = () => products.map(item => (<CartProduct name={item.name} price={item.price} qty={item.qty} />))

    return (
        <React.Fragment>
            <SideSheet
                isShown={cartShown}
                onCloseComplete={() => setCartShown(false)}
            >
                <Paragraph margin={40}>Your cart</Paragraph>
                <Table>
                    <Table.Head>
                        <Table.TextHeaderCell>
                            Product
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Quantity
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Price
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Actions
                        </Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {renderCartProducts()}
                        <Table.Row>
                            <Table.TextCell />
                            <Table.TextCell />
                            <Table.TextCell isNumber>
                                <strong>9000</strong>
                            </Table.TextCell>
                            <Table.TextCell>
                                <Button>Checkout</Button>
                            </Table.TextCell>
                        </Table.Row>
                    </Table.Body>
                    </Table>
            </SideSheet>
        </React.Fragment>
    )
}

export default Cart