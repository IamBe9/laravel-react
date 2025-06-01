import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        Inertia.post('/logout', {}, { preserveState: false });
    };

    return (
        <div className="bg-black text-white font-hanken-grotesk pb-20">
            <div className="px-10">
                <nav className="flex justify-between items-center py-4 border-b border-white/10">
                    <div>
                        <Link href="/">
                            <img src="/images/logo.svg" alt="Pixel Positions Logo" />
                        </Link>
                    </div>

                    <div className="space-x-6 font-bold">
                        <Link href="/">Jobs</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Salaries</Link>
                        <Link href="#">Companies</Link>
                    </div>

                    <div className="space-x-6 font-bold flex">
                        <Link href="/">Log Out</Link>
                        <form onSubmit={handleLogout}>
                            <button type="submit">Change Account</button>
                        </form>
                    </div>
                </nav>

                <main className="mt-10 max-w-[986px] mx-auto">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
