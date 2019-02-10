import React, { Fragment } from 'react';

const UsersListItem = ({ user }) => {
    const { name, email } = user;
    return (
        <Fragment>
            <span>{name}</span> <span> | </span>
            <span>{email}</span>
        </Fragment>
    );
}

export default UsersListItem;