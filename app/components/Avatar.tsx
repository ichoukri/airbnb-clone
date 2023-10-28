'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            alt="avatar"
            src='/images/placeholder.jpg'
            width={30}
            height={30}
            className='rounded-full'
        />
    )
}

export default Avatar