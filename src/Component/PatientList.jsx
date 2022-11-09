import Registro from "./Registro";

const Patientlist = ({patients}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center mx-auto ">
        Listado pacientes
      </h2>
      <p className="text-center mt-5 mb-10 text-xl">
        Administra tus {""}
        <span className="font-bold text-pink1">Pacientes y citas</span>
      </p>
      {patients.map( patient =>(
        <Registro
        patient = {patient}
        />
      ))}
      
    </div>
  );
};

export default Patientlist;
