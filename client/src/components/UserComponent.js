import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Gamer List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Gamer Id</td>
                            <td>Username</td>
                            <td>Email Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.username}</td>
                                    <td> {user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;