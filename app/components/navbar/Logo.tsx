'use client'

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            alt='Airbnb Logo'
            width={100}
            height={100}
            objectFit='contain'
            className='hidden md:block cursor-pointer'
            src='/images/logo.png'
            onClick={() => router.push('/')}
        />
    )
}

export default Logo