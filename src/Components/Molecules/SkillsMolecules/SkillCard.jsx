import React, { useState } from 'react';
import CustomImage from '../../Atoms/CustomImage';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { skillDescription } from './SkillDescription';
import Html from '../../../Layout/ASSETS/HTML.png';
import CSS from '../../../Layout/ASSETS/CSS.png';
import REACT from '../../../Layout/ASSETS/REACT.png';
import BOOTSTRAP from '../../../Layout/ASSETS/bootstrap.png';
import JAVASCRIPT from '../../../Layout/ASSETS/JS.png';
import MONGODB from '../../../Layout/ASSETS/mongoDB.png';
import NODEJS from '../../../Layout/ASSETS/NODE.png';
import GIT from '../../../Layout/ASSETS/git.png';
import EXPRESS from '../../../Layout/ASSETS/ExpressJS.png';
import PieChart from './PieChart';
import {
    FaDatabase,
    FaGit,
} from 'react-icons/fa';
import './SkillCard.css';
import { Col, Container, Row } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';

const skills = [
    { icon: <CustomImage src={Html} />, name: 'HTML', chartData: [70, 10, 20], colors: ['#E44D26', '#FFA07A', '#CD5C5C'] },
    { icon: <CustomImage src={CSS} />, name: 'CSS', chartData: [70, 10, 20], colors: ['#264DE4', '#6A5ACD', '#4169E1'] },
    { icon: <CustomImage src={JAVASCRIPT} />, name: 'JavaScript', chartData: [60, 15, 25], colors: ['#F7DF1E', '#FFD700', '#DAA520'] },
    { icon: <CustomImage src={REACT} />, name: 'React', chartData: [60, 20, 20], colors: ['#61DAFB', '#00CED1', '#20B2AA'] },
    { icon: <CustomImage src={BOOTSTRAP} />, name: 'Bootstrap', chartData: [90, 5, 5], colors: ['#7952B3', '#9370DB', '#8A2BE2'] },
    { icon: <CustomImage src={MONGODB} />, name: 'MongoDB', chartData: [40, 30, 30], colors: ['#4DB33D', '#32CD32', '#008000'] },
    { icon: <CustomImage src={NODEJS} />, name: 'Node JS', chartData: [50, 30, 20], colors: ['#68A063', '#556B2F', '#808000'] },
    { icon: <CustomImage src={EXPRESS} />, name: 'Express JS', chartData: [50, 25, 25], colors: ['#000000', '#708090', '#2F4F4F'] },  
    { icon: <CustomImage src={GIT} />, name: 'Git', chartData: [80, 10, 10], colors: ['#F05032', '#FF6347', '#DC143C'] },
];


const SkillCard = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (index) => {
        setSelectedSkill(index);
        console.log(index);
    };
    const closeChart = () => {
        setSelectedSkill(null);
    };
    return (
        <>
            <Container>
                <Row>
                    {skills.map((skill, index) => (
                        <Col key={index} lg={2} md={2} sm={6} xs={6} className='d-flex justify-content-center'>
                            <div className="skill-card" onClick={() => handleSkillClick(index)} >
                                {skill.icon}
                                <CustomTitle text={skill.name} className='small-title' />
                            </div>
                        </Col>
                    ))}
                </Row>
                {selectedSkill !== null && (
                    <div className="pie-chart-overlay" onClick={closeChart}>
                        <PieChart
                            data={skills[selectedSkill].chartData}
                            labels={['Achieved', 'To learn', 'Areas for technical improvement']}
                            colors={skills[selectedSkill].colors} 
                            description={skillDescription[skills[selectedSkill].name]}
                        />
                    </div>
                )}
            </Container>
        </>
    );
};

export default SkillCard;
