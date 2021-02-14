import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

const HookFormExample: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <input name="exampleRequired" ref={register({required: true})} />
      {errors.exampleRequired && <span>this is filed is required</span>}
      <input type="submit" />
    </form>
  )
}

interface selectForm  {
  firstName: string;
  gender: string;
}

const SelectFormExample: React.FC = () => {
  const { register, handleSubmit } = useForm<selectForm>();
  const onSubmit = (data: selectForm) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}

interface ValidateFormValues {
  firstName: string;
  lastName: string;
  age: number
}

const ValidateForm: React.FC = () => {
  const {register, handleSubmit, errors} = useForm<ValidateFormValues>();
  const onSubmit = (data: ValidateFormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20})} />
      {errors.firstName && <span>firstName is filed is required</span>}

      <input name="lastName" ref={register({ required: true,pattern: /^[A-Za-z]+$/i})} />

      <input name="age" type="number" ref={register({min: 18, max: 99})} />
      <input type="submit" />
    </form>
  )
}

const UseMaterialUiForm: React.FC = () => {
  const {control, handleSubmit} = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) =>
          <input onChange={onChange} value={value} />
        }
      />
      <Controller
        name="iceCreamType"
        control={control}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        as={Select}
      />
      <input type="submit" />
    </form>
  )
}

const UseEffectForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }

  const handleChange = (e: any) => {
    setValue("AntdInput", e.target.value);
  }

  const handleAnother = (e: any) => {
    setValue("AntdInput1", e.target.value);
  }

  useEffect(() => {
    register("AntdInput");
    register("AntdInput1");
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange} />
      <InputField name="other" onChange={handleAnother} />
      <input type="submit" />
    </form>
  )
}

 

export default UseEffectForm;