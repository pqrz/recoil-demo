import React from 'react'
import { Table } from 'evergreen-ui'

const CartProduct = props => (
    <Table.Row>
        <Table.TextCell>{props.name}</Table.TextCell>
        <Table.TextCell>{props.qty}</Table.TextCell>
        <Table.TextCell isNumber>
            {props.price}
        </Table.TextCell>
        <Table.TextCell isNumber>
            Add
        </Table.TextCell>
    </Table.Row>
)

export default CartProduct