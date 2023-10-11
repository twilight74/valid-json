import React from "react";
import './css/form.css'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    data : yup.string().required().test("ok","notok",
    (value)=>{
        try {
            JSON.parse(value);
            return true;
        } catch (e){
            return false;
        }
    }
    )
    })


const Form = () =>{
    const {register ,handleSubmit,formState:{errors}} = useForm({resolver : yupResolver(schema)})
    const onFormSubmit = (data) => {
        // console.log("the form is submit")
        // console.log(data)
        if (data){
            if (!errors.data) {
                // console.log("ok")
                alert("ok")
            }
            else {
                alert("json is not valid")
            }
        }
        else {
            alert("empty!")
        }

    
    }
    return (
        <>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <textarea type="text" placeholder="Paste the Json code " {...register("data")}/>
            {/* {errors.data && (alert("josn not valid"))} */}
            
            <input type="submit" value="check json"/>
        </form>
        </>
    )
}




export default Form;