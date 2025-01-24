"use client";

import React from "react";

const Homebtn = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                
            }}
        >
            <a href="/HOME" style={{ textDecoration: "none" }}>
                <button
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        color: "#fff",
                        backgroundColor: "#007BFF", // ปุ่มสีน้ำเงิน
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                        (e.target as HTMLButtonElement).style.backgroundColor =
                            "#0056b3";
                    }} // เปลี่ยนสีเมื่อ hover
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                        (e.target as HTMLButtonElement).style.backgroundColor =
                            "#007BFF";
                    }}
                >
                    Go to HOME
                </button>
            </a>
        </div>
    );
};

export default Homebtn;
