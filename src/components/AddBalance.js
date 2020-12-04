import React, {useState} from 'react'
import {useAuth} from '../context/use-auth'

export default function AddBalance() {
    const [state, setState] = useState({balance: 0})
    const auth = useAuth()

    const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        auth.increaseBalance(state)
    }

    // make css
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return(
        <div>
            <div style={formDivStyle}>
            <h1>Increase Balance</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Balance</label>
                    <input value={state.balance} onChange={handleChange} type="number" name="balance" placeholder="$0"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 