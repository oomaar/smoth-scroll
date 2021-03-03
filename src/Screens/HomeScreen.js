import { useState } from 'react';
import { Navbar, Sidebar } from '../Components';

const HomeScreen = () => {
    const [toggleShow, setToggleShow] = useState(false);

    const toggle = () => setToggleShow(state => !state);

    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar toggleShow={toggleShow} toggle={toggle} />
        </div>
    );
};

export default HomeScreen;
