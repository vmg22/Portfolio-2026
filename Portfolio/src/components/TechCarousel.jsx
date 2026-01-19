import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';
import { useEffect, useState } from 'react';

const useIcons = (slugs) => {
    const [icons, setIcons] = useState();
    
    useEffect(() => {
        fetchSimpleIcons({ slugs }).then(({ simpleIcons }) => setIcons(simpleIcons));
    }, [slugs]); // Ensure effect runs when slugs change
    
    return icons;
};

const slugs = [
    "html5",
    "css3",
    "javascript",
    "react",
    "nodedotjs",
    "express",
    "python",
    "mysql",
    "mongodb",
    "git",
    "github",
    "visualstudiocode",
    "typescript",
    "vercel",
    "jira",
    "postman",
    "docker",
    "amazonaws"
];

export function TechCarousel() {
    const icons = useIcons(slugs);

    if (!icons) {
        return <div className="text-off-white/50 animate-pulse">Loading icons...</div>;
    }

    const renderedIcons = Object.values(icons).map((icon) => 
        renderSimpleIcon({
            icon,
            size: 42,
            minContrastRatio: 1.2,
            aProps: {
                onClick: (e) => e.preventDefault(),
                style: { cursor: 'pointer' } 
            },
        })
    );

    return (
        <div className="flex items-center justify-center w-full h-full"> 
            <Cloud
                options={{
                    clickToFront: 500,
                    depth: 1,
                    imageScale: 2,
                    initial: [0.1, -0.1],
                    outlineColour: '#0000', // Transparent outline
                    reverse: true,
                    tooltip: 'native',
                    tooltipDelay: 0,
                    wheelZoom: false,
                }}
            >
                {renderedIcons}
            </Cloud>
        </div>
    );
}
