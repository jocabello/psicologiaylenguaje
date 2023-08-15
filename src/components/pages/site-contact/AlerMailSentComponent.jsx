import { Alert } from 'flowbite-react'
import React from 'react'

export default function AlerMailSentComponent() {
  return (
    <div>
        <Alert
            color="success"
            onDismiss={()=>alert("Alert dismissed!")}
        >
            <span>
            <p>
                <span className="font-bold mr-1">
                Mensaje enviado!
                </span>
                Pronto nos contactaremos contigo.
            </p>
            </span>
        </Alert>
    </div>
  )
}
