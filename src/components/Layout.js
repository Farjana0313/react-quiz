import layout_css from '../styles/Layout.module.css';
import Nav from './Nav';

export default function Layout(children) {
    return (
        <>
            <Nav/>
            <main className={layout_css.main}>
                <div className={layout_css.container}>
                    {children}
                </div>
            </main>
        </>
    );
}