import { useEffect } from "react";
import PropTypes from "prop-types";
import HomeHero from "../components/page_elements/element_home-hero.jsx";
import CardRow from "../components/page_elements/element_card-row.jsx";
import profilePic from '../assets/images/profile-pic.png';

export default function Home({ setTitle }) {
    useEffect(() => {
        setTitle("Home");
        document.title = "Home - My Website";
    }, [setTitle]);

    const educationCards = [
        { icon: 'fa-solid fa-school', title: 'GCSEs', text: '10 qualifications A*-C', link: '/education', anchor: 'gcses' },
        { icon: 'fa-solid fa-book', title: 'A Levels', text: '3 qualifications A*-D', link: '/education', anchor: 'alevels' },
        { icon: 'fa-solid fa-graduation-cap', title: 'Degree', text: 'BSc in progress, expected to graduate in 2026', link: '/education', anchor: 'bachelors' },
    ];

    return (
        <>
            <HomeHero
                title="Ahmed Elbary"
                text="MSc Student in Robotics and Autonomous Systems"
                imageSrc={profilePic}
            />
            <CardRow title="A comprehensive education" cards={educationCards} />
        </>
    )
}

Home.propTypes = {
    setTitle: PropTypes.func.isRequired
};
