import React, { useEffect, useState } from "react";
import { fetchDollarData } from "../api/dollarApi";

const DollarInfo: React.FC = () => {
  const [dollarData, setDollarData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDollarData();
        setDollarData(data);
      } catch (error) {
        setError("Error al cargar los datos del dólar.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Información del Dólar</h1>
      <div className="row">
        {/* Columna 1: Dólar BCV */}
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Banco Central de Venezuela</h3>
              <p>Precio: {dollarData.monitors.bcv.price} Bs</p>
              <p>Cambio: {dollarData.monitors.bcv.change}</p>
              <p>Porcentaje: {dollarData.monitors.bcv.percent}%</p>
              <p>Última actualización: {dollarData.monitors.bcv.last_update}</p>
            </div>
          </div>
        </div>

        {/* Columna 2: Dólar EnParaleloVzla */}
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">EnParaleloVzla</h3>
              <p>Precio: {dollarData.monitors.enparalelovzla.price} Bs</p>
              <p>Cambio: {dollarData.monitors.enparalelovzla.change}</p>
              <p>Porcentaje: {dollarData.monitors.enparalelovzla.percent}%</p>
              <p>Última actualización: {dollarData.monitors.enparalelovzla.last_update}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollarInfo;
