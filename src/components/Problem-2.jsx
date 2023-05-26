import React, { useState } from 'react';

const Problem2 = () => {
    const [contacts, setcontacts] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleAllContacts = () => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setcontacts(data.results));
        setShow(true);
    }
    const handleUSContacts = () => {
        fetch('https://contact.mediusware.com/api/country-contacts/us/')
            .then(res => res.json())
            .then(data => console.log(data));
        setShow(true);
    }
    // console.log(contacts)
    return (

        <div className="container">
            <div className="row justify-content-center mt-5 position-relative">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => handleAllContacts()}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => handleUSContacts()}>US Contacts</button>
                </div>

                <div style={{ height: '500px' }}
                    className={`border border-secondary-subtle w-75 border-2 rounded p-4 position-absolute bg-dark overflow-auto ${show ? 'visible' : 'invisible'}`}>
                    <div className='d-flex float-end gap-2'>
                        <button className='p-2 border border-1 rounded border-primary'>Modal A</button>
                        <button className='p-2 border border-1 rounded border-primary'>Modal B</button>
                        <button className='p-2 border border-1 rounded border-danger hover:bg-danger' onClick={() => handleClose()}>Close</button>
                    </div>
                    <div className=''>
                        <table className="table text-light">
                            <thead>
                                <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map(contact =>
                                        <tr key={contact.id}>
                                            <td>{contact.country?.name}</td>
                                            <td>{contact.phone}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className=''>
                            <input className='me-2' type="checkbox" id="evenOnly" name="onlyEven" value="even" />
                            <label className='text-warning' htmlFor="evenOnly"> Only even</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Problem2;