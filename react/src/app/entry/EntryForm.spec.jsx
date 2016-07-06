import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { EntryForm } from './EntryForm.component';


describe('EntryForm', () => {
    it('should render', () => {
        const form = shallow(<EntryForm />);
        const formEl = form.find('.entry-form');
        expect(formEl.length).equals(1);
    });
    
    it('should have provided placeholder', () => {
        const form = shallow(<EntryForm placeholder="my placeholder" />);
        const inputEl = form.find('input');
        expect(inputEl.prop('placeholder')).equals('my placeholder');
    });

    it('should not render an error message if not submitted', () => {
        const form = shallow(<EntryForm placeholder="my placeholder" />);
        const errorEl = form.find('.entry-form__errmsg.is-shown');
        expect(errorEl.length);
    });

    it('should show missing error message when name is empty', () => {
        const form = shallow(<EntryForm />);
        form.find('form').simulate('submit', { preventDefault: () => {}});
        const errorEl = form.find('.entry-form__errmsg.is-shown');
        expect(errorEl.length).equals(1);
        expect(errorEl.text()).equals('Please provide a username');
        
    });

    it('should show too short error message when name is too short', () => {
        const form = shallow(<EntryForm />);
        form.find('input').simulate('change', { target: { value: 'ab'} });
        form.find('form').simulate('submit', { preventDefault: () => {}});
        const errorEl = form.find('.entry-form__errmsg.is-shown');
        expect(errorEl.length).equals(1);
        expect(errorEl.text()).equals('Username must be at least 3 characters');
    });
});


