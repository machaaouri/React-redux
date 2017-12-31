import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';

export class ManageAuthorPage extends React.Component{ // this export is useful for testing
    constructor(props,context){
        super(props,context);

        this.state = {
            author: Object.assign({},this.props.author),
            errors: {},
            saving: false
        };

        this.updateAuthorState = this.updateAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }



    updateAuthorState(event)
    {
        const field = event.target.name;
        let author = Object.assign({},this.state.author);
        author[field] = event.target.value;
        return this.setState({author: author});
    }

    authorPageIsValid()
    {
        let isvalid = true;
        let errors = {};

        if(this.state.author.firstName.length == 0)
        {
            errors.firstName ="firstName is required";
            isvalid = false;
        }
        if(this.state.author.lastName.length == 0)
        {
            errors.lastName ="lastName is required";
            isvalid = false;
        }
        this.setState({errors:errors});
        return isvalid;
    }

    saveAuthor(event)
    {
        event.preventDefault();

        if(!this.authorPageIsValid()) return;

        this.setState({saving: true});
        this.props.actions.saveAuthor(this.state.author)
        .then(()=> this.redirect())
        .catch(error =>{
            toastr.error(error);
            this.setState({saving: false});
        });
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('Author saved');
        this.context.router.push('/authors');
    }

    render(){
        return (
            <AuthorForm 
                onChange={this.updateAuthorState}
                onSave={this.saveAuthor}
                author={this.state.author}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageAuthorPage.propTypes = {
    author:  React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};


//Pull in the React Router context so router is available on this.context.router.
ManageAuthorPage.contextTypes = {
    router: React.PropTypes.object
};

function getAuthorById(authors,id){
    const author = authors.filter(author => author.id == id);
    if(author.length) return author[0]; // filter returns an array, have to grab the first.
    return null;
}

function  mapStateToProps(state,ownProps) {
    const authorId = ownProps.params.id; // from the path '/author/:id'

    let author = {id: '', firstName: '', lastName: ''};

    if(authorId && state.authors.length > 0){
        author = getAuthorById(state.authors, authorId);
    }
    
    return {
        author: author
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(authorActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageAuthorPage);