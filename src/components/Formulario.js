import React, { useState } from "react";

const Formulario = () => {
  //Crear State de citas

  return (
    <>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
        />

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />

        <label>Síntomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>

        <button type="submit" className="u-fill-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Formulario;
