import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

const TRANSLATE = (id, value={}) => <FormattedMessage id={id} values={{...value}}/>

export default TRANSLATE;