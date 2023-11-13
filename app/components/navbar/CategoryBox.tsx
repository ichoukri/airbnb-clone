"use client";

import React, { useCallback } from 'react';
import { IconType } from 'react-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from "query-string";


interface CategoryBoxProps {
    label: string
    icon: IconType
    selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = React.memo(({
    label,
    icon: Icon,
    selected = false
}) => {
    const router = useRouter();
    const params = useSearchParams();


    const handleCategoryClick = useCallback(() => {
        let currentQuery = {};
        if (params?.get('category') === label) {
            return;
        }

        if (params)
            currentQuery = queryString.parse(params.toString());

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipEmptyString: true, skipNull: true })

        router.push(url);
    }, [label, params, router])
    return (
        <div className={`
                flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 
                transition cursor-pointer ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
            onClick={handleCategoryClick}
        >
            <Icon size={26} />
            <div className='font-medium text-sm '>
                {label}
            </div>
        </div>
    )
})

export default CategoryBox