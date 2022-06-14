import React, { useState } from 'react'
import  Button from '../button/Button'

import cls from './contactForm.module.scss'

export default function ContactForm(props) {
  const[form, setForm] = useState(
    { 
      name:"",
      number:"" ,
      email:"",
      message:"",
    })

  function handleChange(e) {
    const keyName = e.target.name;
    let newForm = {...form};
    newForm[keyName]=e.target.value;
    setForm(newForm);
  }
  function handleSubmit(e){
    e.preventDefault();
    props.handleSubmit(form)
    setForm(
      { 
        name:"",
        number:"" ,
        email:"",
        message:"",
      })
  }
  
  return (
	<form className={cls.contactForm}>

        <div className={cls.formGroup}>
			<label className={cls.label}>Name
					<input 
					className={cls.formControl} 
					value={form.name} 
					onChange={handleChange} 
					type="text"  
					name="name" 
					placeholder="Your Name"
					/>
			</label>
        </div>

        <div className={cls.formGroup}>
			<label className={cls.label}>Number
					<input 
					className={cls.formControl} 
					value={form.number} 
					onChange={handleChange} 
					type="text" 
					name="number" 
					placeholder="Your phone number" 
					/>
			</label>   
        </div>

        <div className={cls.formGroup}>
			<label className={cls.label}>Email address
					<input 
					className={cls.formControl} 
					value={form.email} 
					onChange={handleChange} 
					type="text"  
					name="email" 
					placeholder="Your email" 
					/>
			</label>
        </div>

        <div className={cls.formGroup}>
			<label className={cls.label}>Message
					<textarea
						className={cls.formControl} 
						value={form.message} 
						onChange={handleChange} 
						type="text" 
						name="message" 
						placeholder="Message" 
					></textarea> 
			</label>   
        </div>

        <div className={cls.btnM3} >
			<Button 
				// type={"submit"}
				onClick={handleSubmit}
				text="Submit"
			/>
        </div>
	</form>
  )
}
