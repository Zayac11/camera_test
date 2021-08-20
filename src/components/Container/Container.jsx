import React from 'react'
import {NavLink, Redirect, Route} from 'react-router-dom'
import Scanner from './Scanner/Scanner'
import Photo from './Photo/Photo'
import s from './Container.module.scss'

const Container = () => {
    return (
        <div className={s.container}>
            <Route exact path={'/scanner'} render={() => <Scanner />} />
            <Route exact path={'/photo'} render={() => <Photo />} />
            <Route exact path={'/'} render={() => <Redirect to={'/scanner'} />} />

            <div className={s.footer}>
                <NavLink className={s.link} activeClassName={s.active} to={'/scanner'}>Сканер QR</NavLink>
                <NavLink className={s.link} activeClassName={s.active} to={'/photo'}>Фото</NavLink>
            </div>

        </div>
    )
}

export default Container