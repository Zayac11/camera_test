import React, {useState} from 'react'
import QrReader from 'react-qr-scanner'


const Scanner = () => {

    const [result, setResult] = useState('')

    const previewStyle = {
        height: 240,
        width: 320,
    }

    const handleScan = (data) => {

        setResult(data?.text)
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div>
            <QrReader
                // delay={1000}
                facingMode={'environment'}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            <p>Бла бла</p>
            <p>{result}</p>
        </div>
    )
}

export default Scanner