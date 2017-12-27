import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
    it('should return author data formatted for use in a dropdown', () => {

        const authors = [
            {id: 'Houssame-Machaaouri', firstName:'Houssame', lastName:'Machaaouri'},
            {id: 'Houssame-Mch', firstName:'Houssame', lastName:'Mch'}
        ];

        const expected =[
            {value: 'Houssame-Machaaouri', text:'Houssame Machaaouri'},
            {value: 'Houssame-Mch', text:'Houssame Mch'}
        ];

        expect(authorsFormattedForDropdown(authors)).toEqual(expected);

    });
});