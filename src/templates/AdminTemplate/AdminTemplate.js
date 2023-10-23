import React, { Fragment, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminMenu from './Layout/AdminMenu/AdminMenu'
import AdminHeader from './Layout/AdminHeader/AdminHeader'

import "./AdminTemplate.css"
// import { LOGIN_SUCCESS } from "../../redux/types/UserType"

export default function AdminTemplate() {
    // const navigate = useNavigate();
    // const userLogin = JSON.parse(localStorage.getItem(LOGIN_SUCCESS));
    // useEffect(() => {
    //     if (!localStorage.getItem(LOGIN_SUCCESS) || !userLogin.isAdmin) {
    //         alert('Bạn không có quyền truy cập vào trang này !')
    //         navigate(-1);
    //     };
    // }, []);

    return (
        <Fragment>
            <div className='admin__template'>
                <AdminMenu />
                <div className='admin__right'>
                    <AdminHeader />
                    <div className='admin__content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
