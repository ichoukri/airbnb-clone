'use client';

import React, { useState, useCallback } from 'react'
import { BsList } from 'react-icons/bs'
import Avatar from '../Avatar'
import MenuItem from './MenuItem';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = useCallback(() => {
        setShowMenu((prev) => !prev)
    }, [])

    return (
        <div className='relative'>
            <div className='flex gap-2 items-center'>
                <div className='hidden md:block font-semibold text-sm px-4 py-3 rounded-full
                    hover:bg-neutral-100 transition cursor-pointer'
                    onClick={() => { }}
                >
                    Airbnb your home
                </div>
                <div
                    className='p-4 md:py-1 md:px-3 border-[1px] border-neutral-200 rounded-full 
                        flex items-center gap-3 cursor-pointer hover:shadow-md transition'
                    onClick={toggleMenu}
                >
                    <BsList />
                    <div className='hidden md:block'>
                        <Avatar url={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {
                showMenu && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden
                        right-0 top-12 text-sm'
                    >
                        <div className='flex flex-col cursor-pointer '>
                            {
                                currentUser ? (
                                    <>
                                        <>
                                            <MenuItem onClick={() => {}} label='My trips' />
                                            <MenuItem onClick={() => { }} label='My favorites' />
                                            <MenuItem onClick={() => { }} label='My reservations' />
                                            <MenuItem onClick={() => { }} label='My properties' />
                                            <MenuItem onClick={() => { }} label='Airbnb my home' />
                                            <hr/>
                                            <MenuItem onClick={() => signOut()} label='Logout' />
                                        </>
                                    </>
                                ) : (
                                    <>
                                        <MenuItem onClick={loginModal.onOpen} label='Login' />
                                        <MenuItem onClick={registerModal.onOpen} label='Sign up' />
                                    </>
                                )
                            }

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserMenu