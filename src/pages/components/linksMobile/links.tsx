import { useState, useEffect, useRef } from 'react';
import Link from "next/link"


export default function LinksMobile() {

    const [isActive, setIsActive] = useState(false);
    const menuRef =  useRef<HTMLDivElement | null>(null);

    const toggleNavigation = () => {
        setIsActive(!isActive);
    };

    const handleBodyClick = (event: MouseEvent) => {
        if (menuRef.current && !(event.target instanceof Node && menuRef.current.contains(event.target as Node))) {
            setIsActive(false);
        }
    };



    useEffect(() => {
        if (isActive) {
            document.body.addEventListener('click', handleBodyClick);
        } else {
            document.body.removeEventListener('click', handleBodyClick);
        }

        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [isActive]);

    return(
        <>
            <div className='corpoMenu' ref={menuRef}>
                <div onClick={toggleNavigation}>
                    <i className={`bi ${isActive ?'bi-x-lg' : 'bi-list'}`} id='icon'></i>
                </div>
                <div className={`linksMobile ${isActive ? 'linksMobile-active' : ''}`}>
                    <ul onClick={toggleNavigation}>
                        <li><Link className="item-link" href="/"  >Home</Link></li>
                        <li><Link className="item-link" href="/about">Sobre</Link></li>
                        <li><Link className="item-link" href="/projetos">Projetos</Link></li>
                        <li><Link className="item-link" href="/contatos">Contatos</Link></li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
