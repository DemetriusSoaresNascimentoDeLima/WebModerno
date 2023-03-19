import React from 'react'
import ReactDOM from 'react-dom'

import Multi, {BoaNoite} from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />,
        <BoaNoite nome="Bia" />
    </div>
    , document.getElementById('root'))
