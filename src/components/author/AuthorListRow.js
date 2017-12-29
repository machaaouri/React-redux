import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author,onClick}) => {
    return (
        <tr>
            <td><input className="btn btn-danger" type="button" value="Delete" onClick={onClick.bind(this,author.id)} /></td>
            <td><Link to={'/author/'+ author.id}>{author.id}</Link></td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default AuthorListRow;