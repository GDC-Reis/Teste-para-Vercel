import './product.css'

import axios from "axios";

import {useState} from 'react';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Product = () => {

    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago("APP_USR-4eb0c957-8931-42ed-be1c-39085cb82ccb");

    const createPreference = async () => {
        try {
          const response = await axios.post("http://localhost:8080/create_preference", 
          {
            description: "Mel Puro (Cipo-Uva)",
            price: 30,
            quantity: 1,
            currency_id: "ARS",
          },
          {
            description: "Mel no pote com Favo Natural",
            price: 45,
            quantity: 1,
            currency_id: "MPF"
            /*Verificar como colocar novos produtos*/
          }
            );
    
          const { id } = response.data;
          return id;

        } catch (error) {
          console.log(error);
        }
      };
    
      const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
          setPreferenceId(id);
        }
      };
     

    return ( 
        <div className='card-product-container'>
          <div className='card-product'>
            <div className='card'>
              
              <h3>Mel Puro (Cipo-Uva) 1L</h3>
              <p className='price'>R$ 30</p>
              <button onClick={handleBuy}>Comprar</button>
              {preferenceId && <Wallet initialization={{ preferenceId }} />}

            </div>
          </div>
        </div>
     );
}
 
export default Product;