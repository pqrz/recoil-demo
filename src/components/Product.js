import React from 'react'
import { Pane, Button, Text } from 'evergreen-ui'

const Product = props => (
    <Pane
        elevation={1}
        float="left"
        backgroundColor="white"
        width={200}
        height={120}
        margin={24}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
    >
        <Text>{props.name}</Text>
        <Text size={300}>${props.price}</Text>
        <Button appearance="success" onClick={props.onClick}>ADD</Button>
    </Pane>
)

export default Product