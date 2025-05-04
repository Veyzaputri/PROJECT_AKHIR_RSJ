import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Struk = () => {
  const { id_struk } = useParams();
  const [struk, setStruk] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    if (id_struk) {
      fetchStruk();
    }
  }, [id_struk]);

  const fetchStruk = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/pasien/periksa/struk/${id_struk}`);
      console.log("Struk response:", res.data);
      setStruk(res.data);
      setError(null); // Reset error jika berhasil
    } catch (error) {
      console.error("Error fetching struk data:", error);
      setError("Gagal memuat struk. Coba lagi nanti.");
    }
  };

  // Menghitung total biaya dengan memastikan semua nilai adalah angka
 

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        {error && <div className="notification is-danger">{error}</div>}
        {struk ? (
          <div className="box p-5">
            <h1 className="title has-text-centered">Struk Pemeriksaan</h1>
            <div className="content">
              <p><strong>Nama Pasien:</strong> {struk?.pasien?.nama}</p>
              <p><strong>Tanggal Periksa:</strong> {struk?.periksa?.tanggal_periksa}</p>
              <p><strong>Biaya Periksa:</strong> {struk?.periksa?.biaya_periksa}</p>
              <p><strong>Obat:</strong> {struk?.obat?.nama_obat}</p>
              <p><strong>Harga Obat:</strong> {struk?.obat?.harga}</p>
              <p><strong>Total Biaya:</strong> {struk?.total_biaya}</p>  {/* Menampilkan total biaya */}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Struk;
