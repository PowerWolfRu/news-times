import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../context";
import "./Sidebar.css";

const Sidebar = observer(() => {

    const {article} = useContext(Context);

    return (
        <div>
            <ul className="sidebar">
                {article.categories.map(category =>
                    <button
                    className='sidebar-item'
                    onClick={() => article.setSelectedCategory(category)}
                    key={category.id}
                    >
                        {category.name}
                    </button>
                )}
            </ul>
        </div>
    );
});

export default Sidebar;