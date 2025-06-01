import React from 'react';
import { Link } from '@inertiajs/react';

interface TagType {
    id: number;
    name: string;
    jobs: { id: number; title: string }[];
}

interface TagProps {
    tag: TagType;
    size?: 'small' | 'large';
}

const Tag: React.FC<TagProps> = ({ tag, size = 'large' }) => {
    const baseClasses = 'rounded-full px-4 py-2 text-sm transition-colors duration-300';
    const sizeClasses = size === 'small' ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm';
    const hoverClasses = 'hover:bg-blue-800 hover:text-white';

    return (
        <Link href={`/tags/${encodeURIComponent(tag.name)}`} className={`${baseClasses} ${sizeClasses} ${hoverClasses} bg-gray-800 text-white`}>
            {tag.name}
        </Link>
    );
};

export default Tag;
