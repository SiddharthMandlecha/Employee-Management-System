import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Edit from './Edit';
import Add from './Add'; 

import { employeesData } from '../../Data';

function Dashboard() {

const [employees , setEmployees] = useState(employeesData);
const [selectedEmployee , setSelectedEmployee] = useState(null);
const [isAdding , setisAdding] = useState(false);
const [isEditing , setisEditing] = useState(false);

const handleEdit = (id) => {
    const[ employee ] = employees.filter(employee =>employee.id === id );

    setSelectedEmployee(employee);
    setisEditing(true);
}

const handleDelete = (id) => {
    Swal.fire({
        icom : 'Warning',
        title : 'Are You Sure ?',
        text : "You wont Be Able To Revert This!",
        showCancelButton : true,
        confirmButtonText : 'Yes Delete It!',
        cancelButtonText : 'No Cancel!',
    }).then (result => {
        if(result.value){

        const[employee] = employees.filter(employee => employee.id === id);

Swal.fire({
    icom : 'Success',
    title : 'Deleted',
    text : `${employee.firstName} ${employee.lastName}'s data has been Deleted.`,
    showConfirmButton :false,
    timer: 1500,

});
setEmployees(employees.filter(employee => employee.id!==id));
        }
    });
    }

return (
    <div className='container'>
        {!isAdding && !isEditing &&(
        <>
           <Header
                 setisAdding = { setisAdding }
                />
            <List
                 employees = { employees }
                 handleEdit = { handleEdit }
                 handleDelete = { handleDelete }
               />
        </>
        )}
        { isAdding && (
            <Add
            employees = { employees }
            setEmployees = { setEmployees }
            setisAdding = { setisAdding }
            />
        )}
        { isEditing && (
            <Edit
            employees = { employees }
            selectedEmployee = { selectedEmployee }
            setEmployees = { setEmployees }
            setisEditing = { setisEditing }
          />

        )}
    </div>
  )
}

export default Dashboard;
