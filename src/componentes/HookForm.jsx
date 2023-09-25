import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);

    // limpiar campos
    e.target.reset();
  };
  return (
    <Fragment>
      <h2>Hooks Forms</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Ingrese nombre de usuario"
          className="form-control mb-2"
          name="usuario"
          {...register("usuario", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 5,
              message: "No más de 5 carácteres!",
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres",
            },
          })}
        />
        {errors.usuario && <span role="alert">{errors.usuario.message}</span>}

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};
export default HookForm;
