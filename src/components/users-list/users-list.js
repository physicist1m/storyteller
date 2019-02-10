import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withStoryTellerService } from '../hoc';

import { usersLoaded } from '../../actions/users';

import UsersListItem from '../users-list-item';

class UsersList extends Component {

    componentDidMount() {
        const { storyTellerService } = this.props;
        const data = storyTellerService.getUsers();

        this.props.usersLoaded(data);
    }

    render() {
        const { users } = this.props;
        return(
            <ul>
                {
                    users.map((user, i) => {
                        return <li key={i}><UsersListItem 
                                            user={user}/></li>
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ users }) => {
    return users;
};

const mapDispatchToProps = {usersLoaded};

export default compose(
    withStoryTellerService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UsersList);