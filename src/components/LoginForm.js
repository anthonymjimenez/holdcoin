import React, {useState} from 'react'

export default function LoginForm({handleLogIn}) {
    const [state, setState] = useState({username: "", password: ""})

    const handleChange = (e) => {
        setState({...state, [e.target.placeholder]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogIn(state)
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
            <h1>Log In</h1>
            <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label>Username</label>
                    <input value={state.username} onChange={handleChange} type="text" placeholder="username"/>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input value={state.password} onChange={handleChange} type="password" placeholder="password"/>
                </div>
                
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 