import React from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'

const layout = ( props ) => (
        <Aux>
        <div>Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.content}>
            {props.children}
        </main>
        </Aux>
);

export default layout;