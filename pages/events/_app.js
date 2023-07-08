import { Component } from 'react'
import '../../app/globals.css'
import MainLayout from '@/src/components/layout/main-layout';

function MyApp({ component, PageProps }) { 
    return(
        <>
            <MainLayout>
                <Component {...PageProps} />
            </MainLayout>
        </>
    );
}

export default MyApp