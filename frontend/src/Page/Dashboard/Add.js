import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../../redux';

function Add({ setIsAdding }) {
    const dispatch = useDispatch();
    const { employees } = useSelector(state => state.employees);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');
    const [courses, setCourses] = useState({ MCA: false, BCA: false, BSc: false });
    const [gender, setGender] = useState('');
    const [designation, setDesignation] = useState('');
    const [image, setImage] = useState(null); 

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date,
            courses: Object.keys(courses).filter(course => courses[course]),
            gender,
            designation,
            image: URL.createObjectURL(image)
        }
        dispatch(addEmployee(newEmployee));
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);  // Storing the uploaded image file
    }
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCourses(prevCourses => ({ ...prevCourses, [name]: checked }));
    };
    const selectedCourses = Object.keys(courses).filter(course => courses[course]).join(', ');

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add