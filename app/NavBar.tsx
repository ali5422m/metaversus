"use client";

import React from 'react';
import {motion} from "framer-motion";

import styles from "@/app/index";
import {navVariants} from "@/utils/motion";
import Image from "next/image";

const NavBar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="absolute w-[50%] inset-0 gradient-01"/>
            <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
                <div className="">
                    <Image
                        src="/search.svg"
                        width={24}
                        height={24}
                        alt="search"
                        className="object-contain"
                    />
                </div>
                <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
                    METAVERSUS
                </h2>
                <div>
                    <Image
                        src="/menu.svg"
                        alt="menu"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </div>
            </div>
        </motion.nav>
    );
};

export default NavBar;