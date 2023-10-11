import React from "react";
import './css/form.css'
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    data : yup.string().required(<p className="required" style={{fontSize: '20px', textAlign:'center', fontfamily:"Arial, Helvetica, sans-serif" , background:"#e37872" , margin:"5px"} } >Oops! You Forgot To Paste</p>).test("",<p
    style={{fontSize: '20px', textAlign:'center', fontfamily:"Arial, Helvetica, sans-serif" , background:"#ee160a" , margin:"5px"} }>
        Oh! You Have Some Mistake In Code
    </p>,
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
        if (data){
            alert("YESSSS , Your Code Is Valid")
            
        }    
    }
    return (
        <>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <textarea type="text" placeholder="Paste The Json Code " {...register("data")}/>
            {errors.data && (<p>{errors.data?.message}</p>)}    
            <input type="submit" value="check json"/>
        </form>
        </>
    )
}




export default Form;