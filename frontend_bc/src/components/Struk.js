import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Struk = () => {
  const { id_struk } = useParams();
  const [struk, setStruk] = useState(null);
<<<<<<< HEAD
  const [error, setError] = useState(null);
  
=======
>>>>>>> b5adf4242818a3997fcddb0fbbdf3495784da4a3

  useEffect(() => {
    if (id_struk) {
      fetchStruk();
    }
  }, [id_struk]);

  const fetchStruk = async () => {
    try {
<<<<<<< HEAD
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
=======
      const res = await axios.get(`http://localhost:5000/struk/${id_struk}`);
      console.log("Struk response:", res.data);
      setStruk(res.data);
    } catch (error) {
      console.error("Error fetching struk data:", error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
>>>>>>> b5adf4242818a3997fcddb0fbbdf3495784da4a3
        {struk ? (
          <div className="box p-5">
            <h1 className="title has-text-centered">Struk Pemeriksaan</h1>
            <div className="content">
<<<<<<< HEAD
              <p><strong>Nama Pasien:</strong> {struk?.pasien?.nama}</p>
              <p><strong>Tanggal Periksa:</strong> {struk?.periksa?.tanggal_periksa}</p>
              <p><strong>Biaya Periksa:</strong> {struk?.periksa?.biaya_periksa}</p>
              <p><strong>Obat:</strong> {struk?.obat?.nama_obat}</p>
              <p><strong>Harga Obat:</strong> {struk?.obat?.harga}</p>
              <p><strong>Total Biaya:</strong> {struk?.total_biaya}</p>  {/* Menampilkan total biaya */}
=======
              <p><strong>Nama Pasien:</strong> {struk?.Pasien?.nama}</p>
              <p><strong>Tanggal Periksa:</strong> {struk?.Periksa?.tanggal_periksa}</p>
              <p><strong>Biaya Periksa:</strong> {struk?.Periksa?.biaya_periksa}</p>
              <p><strong>Obat:</strong> {struk?.Obat?.nama_obat}</p>
              <p><strong>Harga Obat:</strong> {struk?.Obat?.harga}</p>
              <p><strong>Total Biaya:</strong> {struk?.total_biaya}</p>
>>>>>>> b5adf4242818a3997fcddb0fbbdf3495784da4a3
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Struk;
=======
export default Struk;
>>>>>>> b5adf4242818a3997fcddb0fbbdf3495784da4a3
