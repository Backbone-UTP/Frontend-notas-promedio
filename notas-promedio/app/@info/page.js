"use client";
import { useContext, useState, useEffect } from "react";
import { contextData } from "../context/contextData";

export default function Info() {
  const { data, setData } = useContext(contextData);
  const classnameButton =
    "mt-2 mb-2 p-1 justify-end cursor-pointer bg-white text-[150%] rounded-[8px] border-[1px] border-b-[4px] border-black transition-all border-r-[4px] w-[50%]";

  // Variables Crear Materia
  const [nameSubjectCrearMateria, setNameSubjectCrearMateria] = useState("");
  const [creditSubjectCrearMateria, setCreditSubjectCrearMateria] =
    useState("");
  const [percentageCutCrearMateria, setPercentageCutCrearMateria] =
    useState("");
  const [obtainedGradeCrearMateria, setObtainedGradeCrearMateria] =
    useState("");
  const [percentageGradeCrearMateria, setPercentageGradeCrearMateria] =
    useState("");

  // Variables Editar Nota
  const [nameSubjectEditarNota, setNameSubjectEditarNota] = useState("");
  const [nameCutEditarNota, setNameCutEditarNota] = useState("");
  const [nameGradeEditarNota, setNameGradeEditarNota] = useState("");
  const [obtainedGradeEditarNota, setObtainedGradeEditarNota] = useState("");
  const [percentageGradeEditarNota, setPercentageGradeEditarNota] =
    useState("");

  // Variables Crear Nota
  const [nameSubjectCrearNota, setNameSubjectCrearNota] = useState("");
  const [nameCutCrearNota, setNameCutCrearNota] = useState("");
  const [obtainedGradeCrearNota, setObtainedGradeCrearNota] = useState("");
  const [percentageGradeCrearNota, setPercentageGradeCrearNota] = useState("");

  // Variables Editar Materia
  const [nameSubjectEditarMateria, setNameSubjectEditarMateria] = useState("");
  const [newnameSubjectEditarMateria, setNewnameSubjectEditarMateria] =
    useState("");
  const [creditSubjectEditarMateria, setCreditSubjectEditarMateria] =
    useState("");

  // Variables Editar Corte
  const [nameSubjectEditarCorte, setNameSubjectEditarCorte] = useState("");
  const [nameCutEditarCorte, setNameCutEditarCorte] = useState("");
  const [percentageCutEditarCorte, setPercentageCutEditarCorte] = useState("");

  // Variables Crear Corte CrearCorte
  const [nameSubjectCrearCorte, setNameSubjectCrearCorte] = useState("");
  const [percentageCutCrearCorte, setPercentageCutCrearCorte] = useState("");
  const [obtainedGradeCrearCorte, setObtainedGradeCrearCorte] = useState("");
  const [percentageGradeCrearCorte, setPercentageGradeCrearCorte] =
    useState("");

  useEffect(() => {
    const localStorageData = localStorage.getItem("materias");
    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setData([data[0], data[1], parsedData]);
    }
  }, []);

  const data_validation = (value) => {
    let value_return;
    if (value != "nada") {
      value_return = value;
    } else {
      value_return = "";
    }
    return value_return;
  };

  const range_check = (min, max, integer, value) => {
    let outcome = value;
    if (value >= min && value <= max) {
      // verifica si el valor entregado está dentro del rango dado
      if (integer) {
        // verifica si el valor debe ser entero o decimal
        parseFloat(value) - parseInt(value) == 0
          ? (outcome = value)
          : (outcome = "");
      }
    } else {
      outcome = "";
    }
    return outcome;
  };

  // Funcion que devuelve la estructura para crear el corte
  const crear_corte = () => {
    return (
      <div className="h-full w-full basis-full flex flex-col overflow-auto">
        <div className="text-5xl text-center">Crear Corte</div>
        <div className="text-3xl mb-2">Materia</div>{" "}
        {/* ----- Select Nombre Materia -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameSubjectCrearCorte}
          onChange={(e) =>
            setNameSubjectCrearCorte(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Porcentaje Corte: </div>{" "}
          {/* ----- Input Porcentaje Corte -------- */}
          <input
            type="number"
            min="0"
            max="100"
            name="name"
            value={percentageCutCrearCorte}
            onChange={(e) =>
              setPercentageCutCrearCorte(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="text-4xl mb-4">Crear Nota</div>
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Nota: </div>{" "}
          {/* ----- Input Valor Nota -------- */}
          <input
            type="number"
            min="0"
            max="5"
            name="name"
            value={obtainedGradeCrearCorte}
            onChange={(e) =>
              setObtainedGradeCrearCorte(
                range_check(0, 5, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-wrap mb-5">
          <div className="text-3xl mr-5 mb-2">Porcentaje Nota: </div>{" "}
          {/* ----- Input Porcentaje Nota -------- */}
          <input
            type="number"
            min="0"
            max="100"
            name="name"
            value={percentageGradeCrearCorte}
            onChange={(e) =>
              setPercentageGradeCrearCorte(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button className={classnameButton}>Crear Corte</button>
          <button
            className={classnameButton}
            onClick={() => setData([0, "No se ha seleccionado", data[2]])}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  // Funcion que devuelve la estructura para editar el corte
  const editar_corte = () => {
    return (
      <div className="h-full w-full basis-full flex flex-col overflow-auto">
        <div className="text-5xl text-center">Editar Corte</div>
        <div className="text-3xl mb-2">Materia</div>
        {/* ----- Select Nombre Materia -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameSubjectEditarCorte}
          onChange={(e) =>
            setNameSubjectEditarCorte(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <div className="text-3xl mb-2">Corte</div>{" "}
        {/* ----- Select Numero Corte -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameCutEditarCorte}
          onChange={(e) =>
            setNameCutEditarCorte(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="f">f</option>
          <option value="g">g</option>
          <option value="h">h</option>
        </select>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="text-4xl mb-4">Corte #</div>
        <div className="flex flex-wrap">
          <div className="text-3xl mr-5 mb-2">Porcentaje Corte: </div>{" "}
          {/* ----- Input Porcentaje Corte -------- */}
          <input
            type="number"
            min="0"
            max="100"
            name="name"
            value={percentageCutEditarCorte}
            onChange={(e) =>
              setPercentageCutEditarCorte(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-end w-full">
          <button className={classnameButton}>Modificar Corte</button>
          <button className={classnameButton}>Eliminar Corte</button>
          <button
            className={classnameButton}
            onClick={() => setData([0, "No se ha seleccionado", data[2]])}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const update_subject_data_editar_materia = (param) => {
    const findSubject = data[2].filter(
      (materia) => materia.materia === nameSubjectEditarMateria
    );
    if (param) {
      const indice = data[2].indexOf(findSubject[0]);
      data[2][indice].materia = newnameSubjectEditarMateria;
      data[2][indice].creditos = creditSubjectEditarMateria;
    } else {
      const subjects = data[2].filter(
        (materia) => materia.materia !== nameSubjectEditarMateria
      );
      console.log(subjects);
      data[2] = subjects;
    }

    localStorage.setItem("materias", JSON.stringify(data[2]));
    location.reload();
  };

  // Funcion que devuelve la estructura para editar la materia
  const editar_materia = () => {
    return (
      <div className="h-full w-full basis-full flex flex-col overflow-auto">
        <div className="text-5xl text-center">Editar Materia</div>
        <div className="text-3xl mb-2">Materia</div>{" "}
        {/* ----- Select Nombre Materia -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameSubjectEditarMateria}
          onChange={(e) =>
            setNameSubjectEditarMateria(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          {data[2].map((e) => {
            return <option value={e.materia}>{e.materia}</option>;
          })}
        </select>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="text-3xl mb-2">Nombre</div>{" "}
        {/* ----- Input Nombre Materia -------- */}
        <input
          type="text"
          name="name"
          className="border-2 border-black rounded-2xl w-full px-5 mb-2"
          value={newnameSubjectEditarMateria}
          onChange={(e) => setNewnameSubjectEditarMateria(e.target.value)}
        />
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Creditos: </div>{" "}
          {/* ----- Input Creditos Materia -------- */}
          <input
            type="number"
            min="1"
            max="5"
            name="name"
            value={creditSubjectEditarMateria}
            onChange={(e) =>
              setCreditSubjectEditarMateria(
                range_check(1, 5, true, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-end w-full">
          <button
            className={classnameButton}
            onClick={() => update_subject_data_editar_materia(true)}
          >
            Modificar Materia
          </button>
          <button
            className={classnameButton}
            onClick={() => update_subject_data_editar_materia(false)}
          >
            Eliminar Materia
          </button>
          <button
            className={classnameButton}
            onClick={() => setData([0, "No se ha seleccionado", data[2]])}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  // Funcion que devuelve la estructura para crear la nota
  const crear_nota = () => {
    return (
      <div className="h-full w-full basis-full flex flex-col overflow-auto">
        <div className="text-5xl text-center">Crear Nota</div>
        <div className="text-3xl mb-2">Materia</div>
        {/* ----- Select Nombre Materia -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameSubjectCrearNota}
          onChange={(e) =>
            setNameSubjectCrearNota(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <div className="text-3xl mb-2">Corte</div>{" "}
        {/* ----- Select Numero Corte -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameCutCrearNota}
          onChange={(e) => setNameCutCrearNota(data_validation(e.target.value))}
        >
          <option value="nada"></option>
          <option value="1">f</option>
          <option value="2">g</option>
          <option value="3">h</option>
        </select>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Nota: </div>{" "}
          {/* ----- Input Valor Nota -------- */}
          <input
            type="number"
            min="0"
            max="5"
            name="name"
            value={obtainedGradeCrearNota}
            onChange={(e) =>
              setObtainedGradeCrearNota(
                range_check(0, 5, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-wrap mb-5">
          <div className="text-3xl mr-5 mb-2">Porcentaje Nota: </div>{" "}
          {/* ----- Input Procentaje Nota -------- */}
          <input
            type="number"
            min="0"
            max="100"
            name="name"
            value={percentageGradeCrearNota}
            onChange={(e) =>
              setPercentageGradeCrearNota(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button className={classnameButton}>Crear Nota</button>
          <button
            className={classnameButton}
            onClick={() => setData([0, "No se ha seleccionado", data[2]])}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  // Funcion que devuelve la estructura para editar la nota
  const editar_nota = () => {
    return (
      <div className="h-full w-full basis-full flex flex-col overflow-auto">
        <div className="text-5xl text-center">Editar Nota</div>
        <div className="text-3xl mb-2">Materia</div>{" "}
        {/* ----- Select Nombre Materia -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameSubjectEditarNota}
          onChange={(e) =>
            setNameSubjectEditarNota(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </select>
        <div className="text-3xl mb-2">Corte</div>{" "}
        {/* ----- Select Numero Corte -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameCutEditarNota}
          onChange={(e) =>
            setNameCutEditarNota(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="1">f</option>
          <option value="2">g</option>
          <option value="3">h</option>
        </select>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="text-3xl mb-2">Nota</div>{" "}
        {/* ----- Select Numero Nota -------- */}
        <select
          className="border-2 border-black rounded-2xl px-5 mb-3"
          defaultValue=""
          value={nameGradeEditarNota}
          onChange={(e) =>
            setNameGradeEditarNota(data_validation(e.target.value))
          }
        >
          <option value="nada"></option>
          <option value="1">f</option>
          <option value="2">g</option>
          <option value="3">h</option>
        </select>
        <div className="bg-white rounded-2xl h-full w-full mb-3"></div>
        <div className="text-4xl mb-4">Nota #</div>
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Nota: </div>{" "}
          {/* ----- Input Valor Nota -------- */}
          <input
            type="number"
            min="0"
            max="5"
            name="name"
            value={obtainedGradeEditarNota}
            onChange={(e) =>
              setObtainedGradeEditarNota(
                range_check(0, 5, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-wrap mb-5">
          <div className="text-3xl mr-5 mb-2">Porcentaje Nota: </div>
          {/* ----- Input Porcentaje Nota -------- */}
          <input
            type="number"
            min="0"
            max="100"
            name="name"
            value={percentageGradeEditarNota}
            onChange={(e) =>
              setPercentageGradeEditarNota(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-end w-full">
          <button className={classnameButton}>Modificar Nota</button>
          <button className={classnameButton}>Eliminar Nota</button>
          <button
            className={classnameButton}
            onClick={() => setData([0, "No se ha seleccionado", data[2]])}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const cached_subject = () => {
    let subjectsObject = localStorage.getItem("materias");
    const subject = {
      materia: nameSubjectCrearMateria,
      creditos: creditSubjectCrearMateria,
      cortes: [
        {
          porcentaje: percentageCutCrearMateria,
          notas: [
            {
              nota: obtainedGradeCrearMateria,
              porcentaje: percentageGradeCrearMateria,
            },
          ],
        },
      ],
    };

    if (subjectsObject != null) {
      let objectLocalStorage = JSON.parse(subjectsObject);
      objectLocalStorage.push(subject);
      const objectLocalStorage2 = objectLocalStorage;
      setData(data[0], data[1], objectLocalStorage2);
      localStorage.setItem("materias", JSON.stringify(objectLocalStorage2));
    } else {
      const arrayObject = [subject];
      setData(data[0], data[1], arrayObject);
      localStorage.setItem("materias", JSON.stringify(arrayObject));
    }
    location.reload();
  };

  // Funcion que devuelve la estructura para crear la materia
  const crear_materia = () => {
    return (
      <div className="h-full w-full basis-full flex flex-col overflow-auto">
        <div className="text-5xl text-center">Crear Materia</div>
        <div className="text-3xl mb-2">Nombre</div>{" "}
        {/* ----- Input Nombre Materia -------- */}
        <input
          required
          type="text"
          name="name"
          className="border-2 border-black rounded-2xl w-full px-5 mb-2"
          value={nameSubjectCrearMateria}
          onChange={(e) => setNameSubjectCrearMateria(e.target.value)}
        />
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Creditos: </div>{" "}
          {/* ----- Input Creditos Materia -------- */}
          <input
            required
            type="number"
            min="1"
            max="5"
            name="name"
            value={creditSubjectCrearMateria}
            onChange={(e) =>
              setCreditSubjectCrearMateria(
                range_check(1, 5, true, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="text-4xl mb-2">Crear Corte</div>
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Porcentaje Corte: </div>{" "}
          {/* ----- Input Porcentaje Corte -------- */}
          <input
            required
            type="number"
            name="name"
            min="0"
            max="100"
            value={percentageCutCrearMateria}
            onChange={(e) =>
              setPercentageCutCrearMateria(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="bg-white rounded-2xl w-full h-1 mb-3"></div>
        <div className="text-4xl mb-4">Crear Nota</div>
        <div className="flex flex-wrap mb-3">
          <div className="text-3xl mr-5 mb-2">Nota: </div>{" "}
          {/* ----- Input Nota Nota -------- */}
          <input
            required
            type="number"
            min="0"
            max="5"
            name="name"
            value={obtainedGradeCrearMateria}
            onChange={(e) =>
              setObtainedGradeCrearMateria(
                range_check(0, 5, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-wrap mb-5">
          <div className="text-3xl mr-5 mb-2">Porcentaje Nota: </div>{" "}
          {/* ----- Input Porcentaje Nota -------- */}
          <input
            required
            type="number"
            min="0"
            max="100"
            name="name"
            value={percentageGradeCrearMateria}
            onChange={(e) =>
              setPercentageGradeCrearMateria(
                range_check(0, 100, false, e.target.value)
              )
            }
            className="border-2 border-black rounded-2xl w-52 px-5 mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button className={classnameButton} onClick={() => cached_subject()}>
            Crear Materia
          </button>
          <button className={classnameButton} onClick={() => location.reload()}>
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  const info_data = () => {
    const findSubject = data[2].filter(
      (materia) => materia.materia === data[1]
    );
    const indice = data[2].indexOf(findSubject[0]);
    if (data[1] != "No se ha seleccionado") {
      return (
        <div>
          {/* ↓↓↓↓↓↓↓↓↓↓↓↓ Inicio Seccion Nombre materia ↓↓↓↓↓↓↓↓↓↓↓↓ */}
          <div className="text-5xl text-center">{data[1]}</div>
          {/* ↓↓↓↓↓↓↓↓↓↓↓↓ Seccion Nota faltante y Creditos materias ↓↓↓↓↓↓↓↓↓↓↓↓ */}
          <div className="flex justify-between mt-2 text-lg">
            <div>Faltante: 2.0</div>
            <div>Creditos: 4</div>
          </div>
          {/* ↓↓↓↓↓↓↓↓↓↓↓↓ Seccion Linea horizontal blanca ↓↓↓↓↓↓↓↓↓↓↓↓ */}
          <div className="bg-white w-full h-2 rounded my-3"></div>
          {/* ↓↓↓↓↓↓↓↓↓↓↓↓ Seccion Cortes y notas ↓↓↓↓↓↓↓↓↓↓↓↓ */}
          {data[2][indice].cortes.map((cut, index) => (
            <div>
              <div className="text-2xl flex justify-between">
                <div className="pl-10">
                  corte {index + 1}: {cut.porcentaje}
                </div>
                <div className="pr-10">Promedio: 2.0</div>
              </div>
              {cut.notas.map((note, indexNote) => (
                <div className="flex justify-center">
                  <div className="mr-64">
                    Nota {indexNote + 1}: {note.nota}
                  </div>
                  <div>{note.porcentaje}%</div>
                </div>
              ))}
            </div>
          ))}
          {/* ⭡⭡⭡⭡⭡⭡⭡⭡⭡⭡⭡⭡ Fin ⭡⭡⭡⭡⭡⭡⭡⭡⭡⭡⭡⭡ */}
        </div>
      );
    } else {
      return data[1];
    }
  };

  // Funcion que devuelve la estructura que se necesita
  const select_information_by_value = () => {
    switch (data[0]) {
      case 0:
        return info_data();
      case 1:
        return crear_corte();
      case 2:
        return editar_corte();
      case 3:
        return editar_materia();
      case 4:
        return crear_nota();
      case 5:
        return editar_nota();
      case 6:
        return crear_materia();
    }
  };

  return (
    <div className="h-[90vh] border-4 border-black rounded-2xl bg-[#D9D9D9] basis-full flex content-between flex-col p-3 overflow-auto">
      {select_information_by_value()}
    </div>
  );
}
