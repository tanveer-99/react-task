import React, { useEffect } from 'react';

const Problem2 = () => {

    useEffect(()=> {
        fetch('https://contact.mediusware.com/api/contacts/?format=api')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                    <button data-toggle="modal" data-target="#modalA" className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>
                    <button data-toggle="modal" data-target="#modalB" className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>


                {/* modal A */}
                <div className="modal fade" id="modalA" tabindex="-1" role="dialog" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal A</h5>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-toggle="modal" data-dismiss="modal" data-target="#modalA">All Contacts</button>
                        <button type="button" className="btn btn-secondary" data-toggle="modal" data-dismiss="modal" data-target="#modalB">US Contacts</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Only Even
                        </label>
                    </div>
                    </div>
                </div>
                </div>


                {/* modal B */}
                <div className="modal fade" id="modalB" tabindex="-1" role="dialog" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal B</h5>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-toggle="modal" data-dismiss="modal" data-target="#modalA">All Contacts</button>
                        <button type="button" className="btn btn-secondary" data-toggle="modal" data-dismiss="modal" data-target="#modalB">US Contacts</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Only Even
                        </label>
                    </div>
                    </div>
                </div>
                </div>



            </div>
            
        </div>
    );
};

export default Problem2;