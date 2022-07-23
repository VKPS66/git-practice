import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [shouldDisplay, setShouldDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setShouldDisplay(!shouldDisplay)}>Toggle display</button>
            {shouldDisplay && <HookMouse />}
        </div>
    )
}

export default MouseContainer