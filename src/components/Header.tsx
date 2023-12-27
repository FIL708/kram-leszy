import Image from 'next/image';
import Link from 'next/link';
import plFlag from '@/assets/x.svg';
import DesktopNavbar from './DesktopNavbar';

export default function Header() {
    return (
        <header className='navbar m-auto max-w-7xl'>
            <div className='flex-1'>
                <Link href='/'>
                    <Image
                        src='/logo-nav.png'
                        alt='Kram Leszy logo'
                        width={228}
                        height={42}
                    />
                </Link>
            </div>
            <DesktopNavbar />
        </header>
    );
}