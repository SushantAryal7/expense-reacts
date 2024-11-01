import { render, screen } from "@testing-library/react";
import PrivateRoutes from "../pages/PrivateRoutes";

test('Private Routes',()=>{
    render(<PrivateRoutes />)

    screen.logTestingPlaygroundURL()
})