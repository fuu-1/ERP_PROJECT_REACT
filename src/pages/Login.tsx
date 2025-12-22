import { useState } from "react";
import api from "../api/axios";

const Login = () => {
  const [managerId, setManagerId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post(
        "/login",
        {
          managerId,
          password: pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      const token = res.headers.authorization;
      if (!token) {
        setError("로그인 토큰을 받지 못했습니다.");
        return;
      }
      sessionStorage.setItem("accessToken", token);

      window.location.href = "/";

    } catch (e) {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fbf7ec",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "360px",
          padding: "32px",
          backgroundColor: "#fffdf7",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <img
            src="/image/logo.png"
            alt="회사 로고"
            style={{ width: "180px" }}
          />
        </div>

        <h2 style={{ marginBottom: "24px", fontWeight: "bold" }}>
          로그인
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px", textAlign: "left" }}>
            <label style={{ fontSize: "14px" }}>아이디</label>
            <input
              type="text"
              className="form-control"
              value={managerId}
              onChange={(e) => setManagerId(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "16px", textAlign: "left" }}>
            <label style={{ fontSize: "14px" }}>비밀번호</label>
            <input
              type="password"
              className="form-control"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
          </div>

          {error && (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginBottom: "12px",
              }}
            >
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-warning w-100">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
