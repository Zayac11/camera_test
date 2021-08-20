import React, {useState} from 'react'
import QrReader from 'react-qr-reader'

const Scanner = () => {

    const [result, setResult] = useState('')

    const previewStyle = {
        height: 320,
        width: 320,
    }

    const handleScan = (data) => {

        setResult(data)
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                facingMode={'environment'}
                style = {previewStyle}
            />
            <p>Бла бла</p>
            <p>{result}</p>
        </div>
    )
}

export default Scanner