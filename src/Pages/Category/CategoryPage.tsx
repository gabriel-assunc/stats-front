'use client'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/Api/Category/CategoryActions';
import List from '@/Common/List/Basic/List';
import DefaultList from '@/Common/List/Default/DefaultList';

const CategoryPage = () => {
    const { data: categories, isLoading } = useQuery({
        queryFn: getCategories,
        queryKey: ["categories",]
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const redirectTo = (data: any) => `/category/competition/${data.url}`

    return <DefaultList label='Categorias'>
        <List
            listData={categories}
            href={redirectTo}
        />
    </DefaultList>
}

export default CategoryPage