import React from "react";
import Layout from "@theme/Layout";

export default function CreatorPage() {
  return (
    <Layout title="ผู้จัดทำ" description="ข้อมูลผู้จัดทำระบบ XCHO">
      <div
        style={{
          background:
            "linear-gradient(90deg, #f9b2e4 0%, #e0aaff 50%, var(--ifm-color-primary-lightest) 100%)",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1
            style={{
              color: "#6718d7",
              fontSize: "3rem",
              fontWeight: "800",
              textShadow: "0 8px 15px rgba(30, 6, 67, 0.2)",
            }}
          >
            รายชื่อผู้จัดทำ
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#444",
              maxWidth: "1200px",
              margin: "0 auto",
              lineHeight: "1.8",
              textAlign: "center",
              padding: "0 1.5rem",
              fontWeight: "400",
            }}
          >
            จัดทำคู่มือการใช้งาน XCHO
            ขึ้นมาเพื่อเป็นแนวทางปฏิบัติและการใช้งานระบบจัดการแบบฟอร์ม XCHO
            <br />
            โดยรวบรวมทุกฟังก์ชันสำคัญและการใช้งานต่างๆ ไว้อย่างครบถ้วน
            เพื่อเป็นแหล่งอ้างอิงหลักสำหรับให้ผู้ใช้สามารถใช้งานได้อย่างราบรื่น
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            width: "100%",
            maxWidth: "900px",
            padding: "0 2rem",
          }}
        >
          {/* ผู้จัดทำคนที่ 1 */}
          <div style={cardStyle}>
            <div style={imageWrapperStyle}>
              <img 
                src="/img/profile/ruttana.jpg" 
                alt="Profile 1" 
                style={imageStyle} 
              />
            </div>
            <h3 style={nameStyle}>นางสาวรัตนา คนไว</h3>
            <p style={universityStyle}>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
          </div>

          {/* ผู้จัดทำคนที่ 2 */}
          <div style={cardStyle}>
            <div style={imageWrapperStyle}>
              <img 
                src="/img/profile/pawarisa.webp" 
                alt="Profile 2" 
                style={imageStyle} 
              />
            </div>
            <h3 style={nameStyle}>นางสาวปวริศา คัชมาตย์</h3>
            <p style={universityStyle}>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// --- Styles ---

const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: "3rem 2rem",
  borderRadius: "30px",
  textAlign: "center",
  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(10px)", 
};

const imageWrapperStyle: React.CSSProperties = {
  width: "120px",
  height: "120px",
  margin: "0 auto 1.5rem",
  borderRadius: "50%",
  padding: "5px",
  background: "linear-gradient(45deg, #6718d7, #f9b2e4)", 
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #fff",
};

const nameStyle: React.CSSProperties = {
  margin: "10px 0 5px",
  color: "#6b1abc",
  fontSize: "1.5rem",
  fontWeight: "700",
};

const universityStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#777777", 
  fontWeight: "500",
  margin: 0,
};

