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

    const linkClasses = "group-hover:text-blue-800 font-bold transition-colors duration-300";

    const Divider = () => (
        <div className="w-px h-4 bg-white/20 mx-2" />
    );

    return (
        <div className="bg-black text-white font-hanken-grotesk pb-20">
            <div className="px-10">
                <nav className="flex justify-between items-center py-4 border-b border-white/10">
                    <div>
                        <Link href="/">
                            <img src="/images/logo.svg" alt="Pixel Positions Logo" />
                        </Link>
                    </div>

                    <div className="flex items-center font-bold">
                        <div className="group">
                            <Link href="/" className={linkClasses}>Jobs</Link>
                        </div>
                        <Divider />
                        <div className="group">
                            <Link href="/test" className={linkClasses}>Careers</Link>
                        </div>
                        <Divider />
                        <div className="group">
                            <Link href="/test" className={linkClasses}>Salaries</Link>
                        </div>
                        <Divider />
                        <div className="group">
                            <Link href="/test" className={linkClasses}>Companies</Link>
                        </div>
                    </div>

                    <div className="flex items-center font-bold">
                        <div className="group">
                            <Link href="/jobs/create" className={linkClasses}>Post A Job</Link>
                        </div>
                        <Divider />
                        <form onSubmit={handleLogout} className="group-hover:text-blue-800 font-bold transition-colors duration-300">
                            <button
                                type="submit"
                            >
                                Change Account or Logout
                            </button>
                        </form>
                    </div>
                </nav>

                <main className="mt-10 max-w-[986px] mx-auto">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
