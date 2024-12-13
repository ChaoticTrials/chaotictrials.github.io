import styles from './styles.module.css';
import React from 'react';

type VersionItem = {
    image: string;
    description: React.JSX.Element;
    link: string;
};

const VersionList: VersionItem[] = [
    {
        image: 'overview.png',
        description: (
            <>
                The main GUI by Sky GUIs.
            </>
        ),
        link: 'overview',
    },
    {
        image: 'other_team.png',
        description: (
            <>
                The view for other teams.
            </>
        ),
        link: 'other-team',
    },
    {
        image: 'create_team.png',
        description: (
            <>
                The view for creating a team.
            </>
        ),
        link: 'create-team',
    },
    {
        image: 'own_team.png',
        description: (
            <>
                The view for your own team.
            </>
        ),
        link: 'own-team',
    },
];

const Version: React.FC<VersionItem> = ({image, description, link}) => {
    return (
        <div className='zoomEffect'>
            <a href={link} className={styles.noLinkStyle}>
                <div className='text--center'>
                    <img src={`/img/projects/sky-guis/${image}`} alt={image} className={styles.imageStyle} />
                </div>
                <div className='text--center'>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
};

export default function GuiLinks(): React.JSX.Element {
    return (
        <section className={styles.versions}>
            <div className='container'>
                {VersionList.map((props, idx) => (
                    <div key={idx} className={styles.versionItem}>
                        <Version {...props} />
                    </div>
                ))}
            </div>
        </section>
    );
}
