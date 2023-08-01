import { Link, Head } from '@inertiajs/react';
import App from './App';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Opulencce" />
            <App />
        </>
    );
}
