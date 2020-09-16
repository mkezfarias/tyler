import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locations';
import messages from './messages';

const PROVIDER = ({children, locale = LOCALES.ENGLISH}) => (
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
    >    
        {children}
    </IntlProvider>
)

export default PROVIDER;