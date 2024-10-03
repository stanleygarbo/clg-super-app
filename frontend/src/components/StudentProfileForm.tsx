import React, { useState } from 'react';
import './StudentProfileForm.css';

const StudentProfileForm: React.FC = () => {
  const [formData, setFormData] = useState({
    course: '',
    enrollmentNo: '',
    surname: '',
    firstName: '',
    middleName: '',
    dob: '',
    placeOfBirth: '',
    citizenship: '',
    religion: '',
    civilStatus: '',
    spouseName: '',
    numChildren: '',
    homeAddress: '',
    homeCity: '',
    email: '',
    cellphone: '',
    cityAddress: '',
    parentSurname: '',
    parentFirstName: '',
    parentAddress: '',
    parentOccupation: '',
    parentContact: '',
    parentEmail: '',
    paymentDate: '',
    orNumber: '',
    amount: '',
    postedBy: '',
    term: '',
    schoolYear: '',
    usn: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <h2>ACLC College - Student Profile for Continuing Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course: (Please select)</label>
          <select name="course" value={formData.course} onChange={handleInputChange}>
            <option value="">Select a course</option>
            <option value="BSIT">BSIT</option>
            <option value="BSCS">BSCS</option>
            <option value="BSHM">BSHM</option>
            <option value="BSBA">BSBA</option>
            <option value="23">2/3 yr Program</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="enrollmentNo">Enrollment No.</label>
          <input type="text" id="enrollmentNo" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleInputChange} />
        </div>

        <div className="personal-info form-section">
          <div>
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" id="middleName" name="middleName" value={formData.middleName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="placeOfBirth">Place of Birth</label>
            <input type="text" id="placeOfBirth" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="citizenship">Citizenship</label>
            <input type="text" id="citizenship" name="citizenship" value={formData.citizenship} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="religion">Religion</label>
            <input type="text" id="religion" name="religion" value={formData.religion} onChange={handleInputChange} />
          </div>
          <div>
            <label>Civil Status</label>
            <select name="civilStatus" value={formData.civilStatus} onChange={handleInputChange}>
              <option value="">Select status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widower">Widower</option>
              <option value="separated">Separated</option>
            </select>
          </div>
          <div>
            <label htmlFor="spouseName">Spouse's Name (If Married)</label>
            <input type="text" id="spouseName" name="spouseName" value={formData.spouseName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="numChildren">No. of Children</label>
            <input type="number" id="numChildren" name="numChildren" value={formData.numChildren} onChange={handleInputChange} />
          </div>
        </div>

        <hr />

        <div className="form-group">
          <label>Home Address</label>
          <input type="text" name="homeAddress" placeholder="House No., Street Name, Barangay" value={formData.homeAddress} onChange={handleInputChange} />
          <input type="text" name="homeCity" placeholder="City/Municipality, Province" value={formData.homeCity} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="cellphone">Cellphone No.</label>
          <input type="text" id="cellphone" name="cellphone" value={formData.cellphone} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="cityAddress">City Address (If Boarding)</label>
          <input type="text" id="cityAddress" name="cityAddress" value={formData.cityAddress} onChange={handleInputChange} />
        </div>

        <hr />

        <h3>Parent's or Guardian's Information</h3>
        <div className="parent-info form-section">
          <div>
            <label htmlFor="parentSurname">Parent/Guardian's Surname</label>
            <input type="text" id="parentSurname" name="parentSurname" value={formData.parentSurname} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="parentFirstName">Parent/Guardian's First Name</label>
            <input type="text" id="parentFirstName" name="parentFirstName" value={formData.parentFirstName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="parentAddress">Home Address</label>
            <input type="text" id="parentAddress" name="parentAddress" value={formData.parentAddress} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="parentOccupation">Occupation</label>
            <input type="text" id="parentOccupation" name="parentOccupation" value={formData.parentOccupation} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="parentContact">Cellphone No.</label>
            <input type="text" id="parentContact" name="parentContact" value={formData.parentContact} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="parentEmail">Email</label>
            <input type="email" id="parentEmail" name="parentEmail" value={formData.parentEmail} onChange={handleInputChange} />
          </div>
        </div>

        <hr />

        <h3>Payment Information</h3>
        <div className="payment-info form-section">
          <label htmlFor="paymentDate">Date</label>
          <input type="date" id="paymentDate" name="paymentDate" value={formData.paymentDate} onChange={handleInputChange} />
          <label htmlFor="orNumber">O.R. Number</label>
          <input type="text" id="orNumber" name="orNumber" value={formData.orNumber} onChange={handleInputChange} />
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} />
          <label htmlFor="postedBy">Posted By</label>
          <input type="text" id="postedBy" name="postedBy" value={formData.postedBy} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label>Term: (Please select)</label>
          <select name="term" value={formData.term} onChange={handleInputChange}>
            <option value="">Select term</option>
            <option value="1stSemester">1st Semester</option>
            <option value="2ndSemester">2nd Semester</option>
            <option value="summer">Summer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="schoolYear">School Year</label>
          <input type="text" id="schoolYear" name="schoolYear" value={formData.schoolYear} onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="usn">USN</label>
          <input type="text" id="usn" name="usn" value={formData.usn} onChange={handleInputChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentProfileForm;