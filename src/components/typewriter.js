import React from 'react'
import Typewriter from "typewriter-effect"
import { getString } from "../components/content.js"
import { injectIntl } from 'react-intl'

function TypewriterHelper(props) {
    const { intl } = props;
    
    let status = intl.formatMessage({id: getString()});
    let growing = intl.formatMessage({id: 'growingApptegy'}, {value: '<a target="_blank" class="fancy-link " href="https://www.apptegy.com/">Apptegy</a>'})

    return (
        <Typewriter
            onInit={typewriter => {
            typewriter
                .typeString(growing)
                .pauseFor(10000)
                .deleteAll()
                .typeString(status)
                .start()
            }}
      />
    )
}

export default injectIntl(TypewriterHelper)
