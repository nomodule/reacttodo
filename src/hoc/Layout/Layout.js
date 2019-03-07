import React from 'react';

import Auxx from '../Auxx/Auxx';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const layout = (props) => (
    <Auxx>
        <Modal>Something</Modal>
        <Backdrop />
        {props.children}
    </Auxx>
);


export default layout;