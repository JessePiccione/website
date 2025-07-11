"use client"
import getData from '@/components/api/getData'
import {ResumeState} from '@/components/providers/fullresumestate'
import Certification from '@/components/fullresume/certification'
import Education from '@/components/fullresume/education'
import Skill from '@/components/fullresume/skill'
import Project from '@/components/fullresume/project'
import Experience from '@/components/fullresume/experience'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
export default function FullResume(){
    const {display, toggleDisplay} = ResumeState()
    const [award, setAward] = useState([])
    const [education, setEducation] = useState([])
    const [skill, setSkill] = useState([])
    const [project, setProject] = useState([])
    const [experience, setExperience] = useState([])
    async function getResumeData(){
        setAward(await getData('api/award/category/'))
        setEducation(await getData('api/education/'))
        setSkill(await getData('api/skill/category/'))
        setProject(await getData('api/project/'))
        setExperience(await getData('api/work/experience/'))
    }
    useEffect(()=>{getResumeData()},[])
    return (
        <section id='fullResume' className={display} role='dialog' aria-modal='true' aria-labelledby='resumeTitle'>
            <article onAnimationEnd={toggleDisplay}>
                <button
                className='CloseButton'
                onClick={toggleDisplay}
                aria-label='Close resume'>
                    <FontAwesomeIcon icon={faXmark} aria-hidden='true' className='icon-lg'/>
                </button>
                <section>
                    <h1 id='resumeTitle' className='gradient-text'>Jesse Piccione</h1>
                    <hr/>
                </section>
                <section>
                    <h3>Certifications</h3>
                    <Certification certification={award}/>
                </section>
                <section>
                    <h3>Education</h3>
                    <Education education={education}/>
                </section>
                <section>
                    <h3>Skills</h3>
                    <Skill skill={skill}/>
                </section>
                <section>
                    <h3>Project Experience</h3>
                    <Project project={project}/>
                </section>
                <section>
                    <h3>Work Experience</h3>
                    <Experience experience={experience}/>
                </section>
            </article>
        </section>
    )
}
