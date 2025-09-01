import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/addSchool.module.css';

const SchoolForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">School Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'School name is required' })}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                />
                {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    {...register('city', { required: 'City is required' })}
                />
                {errors.city && <span>{errors.city.message}</span>}
            </div>

            <div>
                <label htmlFor="state">State</label>
                <input
                    type="text"
                    id="state"
                    {...register('state', { required: 'State is required' })}
                />
                {errors.state && <span>{errors.state.message}</span>}
            </div>

            <div>
                <label htmlFor="contact">Contact Number</label>
                <input
                    type="tel"
                    id="contact"
                    {...register('contact', { required: 'Contact number is required' })}
                />
                {errors.contact && <span>{errors.contact.message}</span>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { 
                        required: 'Email is required', 
                        pattern: { 
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                            message: 'Invalid email address' 
                        } 
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="image">School Image</label>
                <input
                    type="file"
                    id="image"
                    {...register('image', { required: 'Image is required' })}
                />
                {errors.image && <span>{errors.image.message}</span>}
            </div>

            <button type="submit">Add School</button>
        </form>
    );
};

export default SchoolForm;