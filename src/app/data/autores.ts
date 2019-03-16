import { Autor } from '../models/autor';

export const autores: Autor[] =
    [
        {
            id:'1',
            nombre: 'Alex',
            apellido: 'hernanez',
            vigente:false,
            pais:'CA',
            estado:'CH'
        }, {
            id:'2',
            nombre: 'Cesar',
            apellido: 'Castillo',
            vigente:true,
            pais:'MX',
            estado:'MX'

        }, {
            id:'3',
            nombre: 'Sergio',
            apellido: 'Mendoza',
            vigente:true,
            
            pais:'US',
            estado:'NL'
        }
    ]
