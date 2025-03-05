import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";

const CategoryList = [
    {
        title: 'Modpack Developer',
        Svg: '/img/projects/skyblock-builder/categories/pack_dev.png',
        path: 'packdev',
    },
    {
        title: 'Server Admin',
        Svg: '/img/projects/skyblock-builder/categories/server_admin.png',
        path: 'admin',
    },
    {
        title: 'Player',
        Svg: '/img/projects/skyblock-builder/categories/player.png',
        path: 'player',
    },
];

function Feature({Svg, title, path}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <a href={path} className={styles.noLinkStyle}>
                    <img src={Svg} className="zoom" alt={title}/>
                </a>
            </div>
        </div>
    );
}

export default function SkyblockBuilderCategories() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {CategoryList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
