import React, { FunctionComponent } from 'react'
import LayoutProps from './Layout.props'
import styles from './Layout.module.css'
import { Footer } from './../component/Footer/Footer'

export const Layout = ({ children }: LayoutProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>Dream maker</h1>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}