import React, { useState } from 'react'
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { updateEmployee } from '../../redux';

function Edit({ selectedEmployee, setIsEditing }) {
    const dispatch = useDispatch();

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);
    const [courses, setCourses] = useState(selectedEmployee.courses);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [designation, setDesignation] = useState('');
    const [image, setImage] = useState(null); 
    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
            courses,
            gender,
            designation,
            image: URL.createObjectURL(image)
        };

        dispatch(updateEmployee(id, employee));
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);  // Storing the uploaded image file
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCourses(prevCourses => ({ ...prevCourses, [name]: checked }));
    };
    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <label>Courses:</label>
                <label>
                    <input
                        type="checkbox"
                        name="MCA"
                        checked={courses.MCA}
                        onChange={handleCheckboxChange}
                    /> MCA
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="BCA"
                        checked={courses.BCA}
                        onChange={handleCheckboxChange}
                    /> BCA
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="BSc"
                        checked={courses.BSc}
                        onChange={handleCheckboxChange}
                    /> BSc
                </label>
                <label>Gender:</label>
<label>
    <input
        type="checkbox"
        name="gender"
        value="Male"
        checked={gender === 'Male'}
        onChange={(e) => setGender(e.target.value)}
    /> Male
</label>
<label>
    <input
        type="checkbox"
        name="gender"
        value="Female"
        checked={gender === 'Female'}
        onChange={(e) => setGender(e.target.value)}
    /> Female
</label>
<label>
    <input
        type="checkbox"
        name="gender"
        value="Other"
        checked={gender === 'Other'}
        onChange={(e) => setGender(e.target.value)}
    /> Other
</label>
<label htmlFor="designation">Designation:</label>
                <select
                    id="designation"
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                >
                    <option value="">Select Designation</option>
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>

                <label htmlFor="image">Upload Image:</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}  // Handling image upload
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit