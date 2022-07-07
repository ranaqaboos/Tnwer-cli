
import { prompt } from 'inquirer';

import{resvation}from'./resvation'
import{searchcourse}from'./search-course'
import {payment}from'./payment'


export async function parent() {
	const {parent} = await prompt({ 
		
            type: 'list',
            name: 'parent',
            message: 'Please choose an action 👀!',
            choices: [
              '1-search course',
                '2-resvation',
                '3-payment',
                '4-exit'

            ],
            filter: (val) => +val[0],
        })
        switch (parent) {
           
            
           case 1:
            await searchcourse();
             break;
    
            case 2:
                await resvation();
                break;

            case 3:
                    await payment();
                    break;
                    
           case 4:
             process.exit(0);       
                       
    }}
