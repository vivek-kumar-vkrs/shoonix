import React, {useState} from 'react'

import Button from '../button/Button'

import cls from './createAdoptionPostForm.module.scss'

import {upload} from '../../api/apiFunctions'

function CreateAdoptionPostForm(props) {

    const[form, setForm] = useState({ 
        petName:"",
        petDob:"",
        petGender:"",
        petTypeofpet:"",
        isDewormed:"",
        isNeutered:"",
        isVaccinated:"",
        description: ""
    })
    const[file, setFile] = useState(null)

    function handleChange(e) {
      const keyName = e.target.name;
      let newForm = {...form};
      newForm[keyName] = e.target.value;
      setForm(newForm);
    }
    
    function handleFileChange(e) {
        setFile(e.target.files[0])
    }

    async function handleSubmit(e){
      e.preventDefault();
      console.log("upload begin")
      const formData = new FormData();
      formData.append('file',file)
      let fileKey = null
      fileKey = await upload(formData)
      await props.handleSubmit(form, fileKey)
      console.log("uploadd success")
    //   props.handleLogIn(form)
    //   setForm({email:"", password:"" });
    }
    
    return (
    <>
        <div className = {cls.wrapperFlex}>
          <form className = {cls.loginForm}>

              <p className={cls.title}>Create New Adoption Post</p>
              
              <div className = {cls.formGroup}>
                    <label  className = {cls.label} > Image
                        <input 
                            className = {cls.formControl} 
                            // value={form.name} 
                            onChange={handleFileChange} 
                            type="file"
                            name="image" 
                        />
                    </label>
                </div> 

                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > Pet Name
                        <input 
                            className = {cls.formControl} 
                            value={form.petName} 
                            onChange={handleChange} 
                            type="name"
                            name="petName" 
                            placeholder="Enter name" 
                        />
                    </label>
                </div>

                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > Date of Birth
                        <input 
                            className = {cls.formControl} 
                            value={form.petDob} 
                            onChange={handleChange} 
                            // type="dob"
                            name="petDob" 
                            placeholder="Enter dob yea-mon-day 2018-09-09" 
                        />
                    </label>
                </div>
                <div className = {cls.formGroup}>
                    <label  className = {cls.label} >Pet Gender
                        <input 
                            className = {cls.formControl} 
                            value={form.petGender} 
                            onChange={handleChange} 
                            // type="dob"
                            name="petGender" 
                            placeholder="Enter gender" 
                        />
                    </label>
                </div>
                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > Type of Pet
                        <input 
                            className = {cls.formControl} 
                            value={form.petTypeofpet} 
                            onChange={handleChange} 
                            // type="dob"
                            name="petTypeofpet" 
                            placeholder="Enter type" 
                        />
                    </label>
                </div>
                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > is Vaccinated
                        <input 
                            className = {cls.formControl} 
                            value={form.isVaccinated} 
                            onChange={handleChange} 
                            // type="dob"
                            name="isVaccinated" 
                            placeholder="Enter password" 
                        />
                    </label>
                </div>
                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > is Dewormed
                        <input 
                            className = {cls.formControl} 
                            value={form.isDewormed} 
                            onChange={handleChange} 
                            // type="dob"
                            name="isDewormed" 
                        />
                    </label>
                </div>
                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > is Neutered
                        <input 
                            className = {cls.formControl} 
                            value={form.isNeutered} 
                            onChange={handleChange} 
                            // type="dob"
                            name="isNeutered" 
                        />
                    </label>
                </div>
                <div className = {cls.formGroup}>
                    <label  className = {cls.label} > Description
                        <input 
                            className = {cls.formControl} 
                            value={form.description} 
                            onChange={handleChange} 
                            // type="dob"
                            name="description" 
                            placeholder="say something about pet" 
                        />
                    </label>
                </div>
            <Button 
              // type={"submit"}
              onClick={handleSubmit}
              text="Submit"
            />
          </form>
        </div>
    </>
    )
}

export default CreateAdoptionPostForm