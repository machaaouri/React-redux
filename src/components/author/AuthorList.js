import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors,onClick}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author =>
                    <AuthorListRow key={author.id} author={author} onClick={onClick}/>
                )}
            </tbody>
        </table>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default AuthorList;