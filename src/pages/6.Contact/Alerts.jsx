import React from 'react'

function Alerts() {
    return (
        <div class="bg-green-200 border border-green-400 text-green-800 px-4 py-3 mb-2 rounded relative" role="alert">
            <strong class="font-bold">Inquiry sent!</strong>
            <p></p>
            <span class="block sm:inline"> We got your contact details and we will contact you soon!</span>
            <p></p>
            <span class="block sm:inline"> Page will refresh in 5 seconds!</span>
        </div>
    )
}

export default Alerts