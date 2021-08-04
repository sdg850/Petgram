import React from 'react'
import { Category } from '../Category'
import { Item, List } from './style'
import { categories } from '../../../api/db.json'


export const CategoryList = () => (
    < List >

        {
            categories.map(item =>
                < Item key={item.id}>
                    < Category { ...item } />
                </Item>
            )
        }

    </List>

)