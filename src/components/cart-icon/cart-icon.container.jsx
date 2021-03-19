import React from 'react'
import {Mutation, Query, graphql} from 'react-apollo'
import {gql} from 'apollo-boost'
import CartIcon from './cart-icon.component'
import {flowRight} from 'lodash'

const TOGGLE_CART_HIDDEN = gql`
    mutation toggleCartHidden{
        toggleCartHidden @client
    }

`

const GET_ITEM_COUNT = gql`
{
    itemCount @client
}
`


function CartIconConatiner() {
    return (
        <Query query={GET_ITEM_COUNT}>
        {
            ({data:{itemCount}}) => {
                return <Mutation mutation={TOGGLE_CART_HIDDEN}>
                {
                    toggleCartHidden => <CartIcon itemCount={itemCount} toggleCartHidden={toggleCartHidden}/>
                }
                </Mutation>
            }
        }
        </Query>
        
    )
}

export default flowRight()(CartIconConatiner)
