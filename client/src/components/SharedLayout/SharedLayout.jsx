import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import AppHeader from "../AppHeader";
import { Container } from "./SharedLayout.styled";

export default function SharedLayout() {
    return (
        <>
            <AppHeader />
            <Container>
                <main>
                    <Suspense fallback={<p>Loading page...</p>}>
                        <Outlet />
                    </Suspense>
                </main>
            </Container>
        </>
    );
}
