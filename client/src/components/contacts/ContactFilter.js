import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';
function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const { filterContact, clearFilter, filtered } = contactContext;
  const keyword = useRef('');

  useEffect(() => {
    if (filtered == null) {
      keyword.current.value = '';
    }
  });

  const onChange = e => {
    if (keyword.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={keyword}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
}

export default ContactFilter;
