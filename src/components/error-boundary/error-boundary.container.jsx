import React, { Component } from 'react'

export class ErrorBody extends Component {

    constructor(props){
        super(props)
        this.state = {hasErrored:false}
    }

    static getDerivedStateFromError(err){
        return {hasErrored:true}
    }
    componentDidCatch(err, info){
        console.log(err)
    }
    render() {
        if(this.state.hasErrored){
            return (
                <div>
                    Something went wrong
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBody
