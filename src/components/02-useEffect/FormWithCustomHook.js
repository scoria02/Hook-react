import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
// import { Message } from './Message';
import './effects.css';

export const FormWithCustomHook = () => {

    

    const [formVlues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formVlues;

    useEffect(() => {
        // console.log('hols')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formVlues )
    }
    


    return (
        <form onSubmit = { handleSubmit } >
            <h1> FormWithCustomHook </h1>
            <hr/>

           < div className = "form-group" >
                <input 
                    type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Tu nombre "
                    autoComplete = "off"
                    value = { name }
                    onChange = {handleInputChange}    
                >
                </input>

            </div>

            < div className = "form-group" >
                <input 
                    type = "text"
                    name = "email"
                    className = "form-control"
                    placeholder = "Tu Email "
                    autoComplete = "off"
                    value = { email }
                    onChange = {handleInputChange}    
                >
                </input>

            </div>
            
            < div className = "form-group" >
                <input 
                    type = "password"
                    name = "password"
                    className = "form-control"
                    placeholder = "***** "
                    autoComplete = "off"
                    value = { password }
                    onChange = {handleInputChange}    
                >
                </input>

            </div>

            <button className = "btn btn-primary" type = "submit" >
                Guardar
            </button>

        </form>
    )
}



    

