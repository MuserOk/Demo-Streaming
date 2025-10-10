import React from 'react'

export default function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 ❌</h1>
            <p>Página no encontrada</p>
            <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
                Volver al inicio
            </a>
        </div>
    )
}
