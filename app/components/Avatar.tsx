'use client';

import Image from "next/image";

interface AvatarProps {
    url: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({url}) => {
    return (
        <Image
            alt="avatar"
            src={url || '/images/placeholder.jpg'}
            width={30}
            height={30}
            className='rounded-full'
        />
    )
}

export default Avatar