import React from 'react';

const AddTask = () => {
    return (
        <div>
            <form className="border p-3 my-3 " onSubmit={handleSubmit}>
                <h1 className="text-center display-4">Add New Task</h1>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={handleChange} value={title} placeholder="Type Title of Task" />
                </div>
                <button type="submit" className="btn btn-success btn-block">Submit</button>
            </form>
        </div>
    );
};

export default AddTask;