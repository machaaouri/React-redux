
  // transform the data that comes from the api into something useful for  populating the drop-down
export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    });
  }

