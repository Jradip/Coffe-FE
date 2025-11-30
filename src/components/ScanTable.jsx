// src/components/ScanTable.jsx
import React, { useState } from "react";
import "./ScanTable.css";
import { FaArrowLeft, FaCamera, FaCheck } from "react-icons/fa";

const ScanTable = ({ onBack, onConfirm }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleConfirm = () => {
    // nanti bisa kirim ke BE / simpan nomor meja
    if (onConfirm) onConfirm(preview);
  };

  return (
    <div className="scan-table-container">
      {/* HEADER */}
      <header className="scan-header">
        <div className="scan-header-top">
          <button className="scan-back-btn" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <span className="scan-title">Scan Meja</span>
          <span className="scan-header-placeholder" />
        </div>
      </header>

      {/* KONTEN */}
      <main className="scan-content">
        <section className="scan-info">
          <h2 className="scan-heading">Upload nomor meja</h2>
          <p className="scan-desc">
            Ambil foto atau upload gambar yang berisi nomor meja Anda. 
            Pelayan akan mengantarkan pesanan sesuai meja tersebut.
          </p>
        </section>

        {/* AREA UPLOAD */}
        <section className="scan-upload-section">
          <label htmlFor="table-image" className="scan-upload-card">
            <div className="scan-upload-icon-wrapper">
              <FaCamera className="scan-upload-icon" />
            </div>
            <p className="scan-upload-text">
              Ketuk di sini untuk memilih gambar
            </p>
            <p className="scan-upload-subtext">
              Format: JPG, PNG. Maks. 5 MB (dummy).
            </p>
          </label>
          <input
            id="table-image"
            type="file"
            accept="image/*"
            className="scan-file-input"
            onChange={handleFileChange}
          />

          {preview && (
            <div className="scan-preview">
              <p className="scan-preview-label">Pratinjau gambar meja:</p>
              <img
                src={preview}
                alt="Preview nomor meja"
                className="scan-preview-image"
              />
            </div>
          )}
        </section>

        {/* TOMBOL KONFIRMASI */}
        <section className="scan-footer">
          <button
            type="button"
            className="scan-confirm-btn"
            disabled={!preview}
            onClick={handleConfirm}
          >
            <FaCheck className="scan-confirm-icon" />
            <span>Konfirmasi Meja</span>
          </button>
        </section>
      </main>
    </div>
  );
};

export default ScanTable;
