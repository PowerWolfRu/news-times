import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import { Context } from '../context';
import {Pagination} from 'react-bootstrap';

const Pages = observer(() => {

    const {article} = useContext(Context)
    const pageCount = Math.ceil(article.totalCount / article.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={article.page === page}
                    onClick={() => article.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;