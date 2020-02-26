import React from "react";
import Row from "./row";

function Table(props) {
    console.log(props)
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Id</th>
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

