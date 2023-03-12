import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center setion__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your plate' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu__wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine and Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
            
          ))}


        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;