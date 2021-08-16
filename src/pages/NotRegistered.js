import React from 'react'
import Context from '../Context'

export const NotRegistered = () => {
    return (
        <Context.Consumer >
            {
                ({ ActivateAuth }) => {
                    return (
                        <form onSubmit={ActivateAuth}>
                        <h1> holaaaaaaaaaa </h1>
                            <button> sign up  </button>
                        </form>
                    )
                }


            }
        </Context.Consumer>
    )
}
