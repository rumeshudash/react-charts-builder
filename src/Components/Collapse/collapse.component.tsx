import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import './collapse.component.scss'

interface CollapseProps {
    title: string
    children: any
    collapse?: boolean
    onChange?: (collapsed: boolean) => void
}

const Collapse = ({ title, children, collapse, onChange }: CollapseProps) => {
    const [collapsed, setCollapsed] = useState(collapse || false)

    useEffect(() => {
        if (typeof collapse !== 'undefined') {
            setCollapsed(collapse)
        }
    }, [collapse])

    const handleCollapse = () => {
        if (typeof collapse === 'undefined') {
            setCollapsed(!collapsed)
        }

        if (typeof onChange === 'function') {
            onChange(!collapsed)
        }
    }

    return (
        <div className={`collapse ${!collapsed ? 'open' : ''}`}>
            <div className='title' onClick={handleCollapse}>
                {title} <span className='arrow' />
            </div>
            <AnimateHeight easing='ease' duration={500} height={collapsed ? 0 : 'auto'}>
                <div className='controls'>{children}</div>
            </AnimateHeight>
        </div>
    )
}

export default Collapse
