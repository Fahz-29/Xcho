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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <div style={cardStyle}>
            <div style={iconCircleStyle}>1</div>
            <h3
              style={{
                margin: "10px 0",
                color: "#000000",
              }}
            >
              นาวสาวรัตนา คนไว
            </h3>
          </div>

          <div style={cardStyle}>
            <div style={iconCircleStyle}>2</div>
            <h3
              style={{
                margin: "10px 0",
                color: "#000000",
              }}
            >
              นางสาวปวริศา คัชมาตย์
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "2.5rem",
  borderRadius: "24px",
  textAlign: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
  border: "1px solid rgba(124, 58, 237, 0.1)",
  transition: "transform 0.3s ease",
};

const iconCircleStyle: React.CSSProperties = {
  width: "60px",
  height: "60px",
  backgroundColor: "#7d2bf1",
  color: "#fff",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "ืnormal",
  margin: "0 auto 1rem",
};
