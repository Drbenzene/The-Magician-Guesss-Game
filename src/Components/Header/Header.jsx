import React, {useState, useEffect, useContext} from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineClear} from 'react-icons/ai'
import styles from './Header.module.css'
import {GlobalContext} from '../../Contex'


function Header() {

  const store = useContext(GlobalContext);

  const {handleClearAll, menuHandler} = store
  return (
    <div className={styles.navbar}>
    <div>
        <GiHamburgerMenu onClick={menuHandler} size="30px"/>
    </div>
    <div className={styles.webname}>
        The Game
    </div>

    <div className={styles.clear}>
       {/* <AiOutlineClear onClick={handleClearAll} />  */}
    </div>
</div>
  )
}

export default Header