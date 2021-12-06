/* @flow */
'use strict';

import Draggable from './Draggable';
import React from 'react';

function shouldNotUpdate(prevProps, nextProps){
    return true;
  }

export default React.memo(Draggable, shouldNotUpdate);
