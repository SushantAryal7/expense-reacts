import { render, screen } from "@testing-library/react";
import Signup from "../pages/SignUP";

test('Sign Up Testing', ()=>{
    render(<Signup />)

    screen.logTestingPlaygroundURL();

})