import React, { useState } from 'react'

export default function useDate() {
    const [] = useState(null)
    const date = (value:string) => {
        let dato = new Date(value);
        let months:string;
        
        switch(dato.getMonth()){
            case 1: 
                months='enero';
                return `${dato.getDay()} de ${months}`
            case 2:
                months='febrero';
                return `${dato.getDay()} de ${months}`
            case 3:
                months='marzo';
                return `${dato.getDay()} de ${months}`
            case 4:
                months='abril';
                return `${dato.getDay()} de ${months}`
            case 5:
                months='mayo';
                return `${dato.getDay()} de ${months}`
            case 6:
                months='junio';
                return `${dato.getDay()} de ${months}`
            case 7:
                months='julio';
                return `${dato.getDay()} de ${months}`
            case 8:
                months='agosto';
                return `${dato.getDay()} de ${months}`
            case 9:
                months='septiembre';
                return `${dato.getDay()} de ${months}`
            case 10:
                months='octubre';
                return `${dato.getDay()} de ${months}`
            case 11:
                months='noviembre';
                return `${dato.getDay()} de ${months}`
            case 12:
                months='diciembre';
                return `${dato.getDay()} de ${months}`
        }
        
    }

    const month = (value:string) => {
        let dato = new Date(value);
        let months:string;
        
        switch(dato.getMonth()){
            case 1: 
                months='enero';
                return months;
            case 2:
                months='febrero';
                return months;
            case 3:
                months='marzo';
                return months;
            case 4:
                months='abril';
                return months;
            case 5:
                months='mayo';
                return months;
            case 6:
                months='junio';
                return months;
            case 7:
                months='julio';
                return months;
            case 8:
                months='agosto';
                return months;
            case 9:
                months='septiembre';
                return months;
            case 10:
                months='octubre';
                return months;
            case 11:
                months='noviembre';
                return months;
            case 12:
                months='diciembre';
                return months;
        }
    }

  return {
    date,
    month
  }
}