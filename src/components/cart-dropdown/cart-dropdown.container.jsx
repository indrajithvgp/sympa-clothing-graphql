import React from 'react';

import {Query, Mutation} from 'react-apollo'
import {gql} from 'apollo-boost'

import CartDropDown from './cart-dropdown.component'


const TOGGLE_CART_HIDDEN = gql`
    mutation toggleCartHidden{
        toggleCartHidden @client
    }
`

const GET_CART_ITEMS = gql`
{
    cartItems @client
}
`
const CartDropdownContainer = ()=>{
    return(
        <Query query={GET_CART_ITEMS}>
        {
            ({data:{cartItems}})=>(
                <Mutation mutation={TOGGLE_CART_HIDDEN}>
                {
                    toggleCartHidden => (<CartDropDown cartItems={cartItems} toggleCartHidden={toggleCartHidden}/>)
                }
                </Mutation>
            )
        }
        </Query>
    )
}

export default CartDropdownContainer