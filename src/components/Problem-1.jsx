import React, {useState} from 'react';

const Problem1 = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [allStatus, setAllStatus] = useState([]);
    const [activeStatus, setActiveStatus] = useState([]);
    const [completedStatus, setCompletedStatus] = useState([]);

    const [show, setShow] = useState('all');

    const handleClick = (val) =>{
        setShow(val);
    }



    const handleName = (event)=> {
        const name = event.target.value;
        setName(name);
    }
    const handleStatus = (event)=> {
        const status = event.target.value;
        setStatus(status)
    }

    const handleSubmit = (event)=> {
        event.preventDefault();

        const all = [
            ...allStatus,
            {
                statusName: name,
                statusMessage: status
            }
        ]
        const statusOrder = {active: 0, completed: 1};
        const result = all.sort(
            ({statusMessage: s1}, {statusMessage: s2}) => (statusOrder[s1] ?? Infinity) - (statusOrder[s2] ?? Infinity)
          );
        setAllStatus(result);

        if(status === "active") {
            const active = [
                ...activeStatus,
                {
                    statusName: name,
                    statusMessage: status
                }
            ]
            setActiveStatus(active);
        }

        if(status === "completed") {
            const completed = [
                ...completedStatus,
                {
                    statusName: name,
                    statusMessage: status
                }
            ]
            setCompletedStatus(completed)
        }

        event.target.reset();
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input onChange={handleName} type="text" name='name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input onChange={handleStatus} type="text" className="form-control" name='status' placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>

                    <div className="tab-content">
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        {   show === "all" &&
                            allStatus.map(status => 
                                <tr>
                                    <td>{status.statusName}</td>
                                    <td>{status.statusMessage}</td>
                                </tr>
                            )
                        }
                        {
                            show === "active" &&
                            activeStatus.map(status => 
                            <tr>
                                <td>{status.statusName}</td>
                                <td>{status.statusMessage}</td>
                            </tr>)
                        }
                        {
                            show === "completed" &&
                            completedStatus.map(status => 
                            <tr>
                                <td>{status.statusName}</td>
                                <td>{status.statusMessage}</td>
                            </tr>)
                        }
                        </thead>
                        <tbody>
                        
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem1;