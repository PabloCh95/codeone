import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import ButtonFilter from '../src/components/ButtonFilter';
import { useState } from 'react';

describe('Component Button Filter',()=>{
    it("if allActive is false render the all buttons",async () => {
        let allActive=false
        const { container, getByText  } = render(
            <ButtonFilter redeem={()=>{return allActive=true}} won={()=>{return allActive=true}} all={()=>{return allActive=false}} allActive={allActive}/>
        );
        const button = getByText("Ganados")
        const button1 = getByText("Canjeados")

        fireEvent.press(button);
        fireEvent.press(button1);
     
        const testRender = render(
            <ButtonFilter redeem={()=>{}} won={()=>{}} all={()=>{}} allActive={allActive}/>
        );

        const button2 = testRender.getByText("Todos")
        
        expect(button2).toBeDefined();        
    })
    it("if allActive is false render the Won and Redeemed buttons",async () => {
        let allActive=true
        const { container, getByText  } = render(
            <ButtonFilter redeem={()=>{return allActive=true}} won={()=>{return allActive=true}} all={()=>{return allActive=false}} allActive={allActive}/>
        );

        const button2 = getByText("Todos")
        
        fireEvent.press(button2);
       
        screen.debug()

        const testRender = render(
            <ButtonFilter redeem={()=>{}} won={()=>{}} all={()=>{}} allActive={allActive}/>
        );

        const button = testRender.getByText("Ganados")
        const button1 = testRender.getByText("Canjeados")

        expect(button).toBeDefined();
        expect(button1).toBeDefined();  
       
              
    })
})