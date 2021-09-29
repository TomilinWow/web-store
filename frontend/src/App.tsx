import React, {FC} from 'react';
import Container from "@material-ui/core/Container";

import HeaderContainer from "./components/Header/Header/HeaderContainer";
import AppRouter from "./components/AppRouter/AppRouter";

const App:FC = () => {

    return (
        <div>
            <HeaderContainer/>
            <Container maxWidth="md">
                <AppRouter/>
            </Container>
        </div>
    )
}
export default App;