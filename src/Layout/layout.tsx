
import TooogleTheme from "@/pages/components/component-theme/toogle-theme"
import LinksMobile from "@/pages/components/linksMobile/links"
import Link from "next/link"
import { ReactNode } from "react"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: ReactNode
  }) {
    return (
      <section className="body-nav">
        <div>
            <nav className="top-bar">
                <div className="name-logo">
                    <h1>DiegoDev</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link className="item-link" href="/">Home</Link></li>
                        <li><Link className="item-link" href="/about">Sobre</Link></li>
                        <li><Link className="item-link" href="/projetos">Projetos</Link></li>
                        <li><Link className="item-link" href="/contatos">Contatos</Link></li>
                    </ul>
                </div> 
                <TooogleTheme></TooogleTheme>   
                <LinksMobile></LinksMobile>
            </nav>
            {children}
        </div>

        <span className="by-diego">by diego leonardo</span>
      </section>
    )
  }