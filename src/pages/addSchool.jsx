import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles/addSchool.module.css';
import Navbar from '../components/Navbar';

const AddSchool = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', data.image[0]);

    try {
      await axios.post('/api/schools', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('School added successfully!');
      reset();
    } catch (error) {
      console.error('Error adding school:', error);
      alert('Failed to add school. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Add School</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputField}>
            <label>School Name</label>
            <input {...register('name', { required: true })} />
            {errors.name && <span className={styles.errorMessage}>Required</span>}
          </div>

          <div className={styles.inputField}>
            <label>Address</label>
            <input {...register('address', { required: true })} />
            {errors.address && <span className={styles.errorMessage}>Required</span>}
          </div>

          <div className={styles.inputField}>
            <label>City</label>
            <input {...register('city', { required: true })} />
            {errors.city && <span className={styles.errorMessage}>Required</span>}
          </div>

          <div className={styles.inputField}>
            <label>State</label>
            <input {...register('state', { required: true })} />
            {errors.state && <span className={styles.errorMessage}>Required</span>}
          </div>

          <div className={styles.inputField}>
            <label>Contact Number</label>
            <input {...register('contact', { required: true, pattern: /^[0-9]+$/ })} />
            {errors.contact && <span className={styles.errorMessage}>Must be a number</span>}
          </div>

          <div className={styles.inputField}>
            <label>Email</label>
            <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email_id && <span className={styles.errorMessage}>Invalid email</span>}
          </div>

          <div className={styles.inputField}>
            <label>School Image</label>
            <input type="file" {...register('image', { required: true })} />
            {errors.image && <span className={styles.errorMessage}>Required</span>}
          </div>

          <button className={styles.button} type="submit">Add School</button>
        </form>
      </div>
    </>
  );
};

export default AddSchool;
