import React from "react";
import Row from "./row";

function Table(props) {
    console.log(props)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Id</th>
                </tr>
            </thead>

            <tbody>
                {props.employees.map(employee => (
                    <Row
                    name = {employee.name.first}
                    gender ={employee.gender}
                    email ={employee.email}
                    age ={employee.dob.age}
                    city ={employee.location.city}
                    id ={employee.id.value}
                    key ={employee.id.value}

                    />
                ))}

            </tbody>
        </table>
    )
}

export default Table;

