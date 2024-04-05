import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/AuthContext';
import AuthService from '../../services/AuthService';

const AccountMenu = ({ isHovering }) => {

    const navigate = useNavigate();
    const { logout } = useAuth();
    const data = JSON.parse(AuthService.getUser());
    console.log('rrrr', data);
    return (
        <div className="relative">

            {isHovering && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white border border-gray-200 rounded-lg shadow-xl">
                    <div className="px-4 py-2">
                        <div className="font-bold text-lg">{data?.name}</div>
                        <div className="text-sm text-gray-500">{data?.email}</div>
                        <div className="text-sm text-gray-500">Role : {data?.role}</div>
                    </div>
                    <div className="px-4 py-2">
                        <button onClick={logout} className="text-sm w-full text-left hover:bg-gray-100 bg-slate-400 rounded-md px-2 py-1">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountMenu;
