import React from 'react'

export default function Title({ mainTitle }) {
    return (
        <h1 style={{ borderBottom: '5px solid red', textAlign: "center" }}>
            {mainTitle}
        </h1>
    )
}
