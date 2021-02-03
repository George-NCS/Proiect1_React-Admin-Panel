import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

function UserList(props) {
    const { users } = props;
    // console.log(props)

    return (
        <div className="user-list">
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index,handleRemoveUser) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                    salary={user.salary}
                    image={user.image}                
                />
            })}
            

        </div>
    );
}

export default UserList;