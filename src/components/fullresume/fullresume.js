"use client"
import getData from '@/components/api/getData'
import Certification from '@/components/fullresume/certification'
import {useEffect, useState} from 'react'
export default function FullResume(){
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
        <section id='fullResume' className='fullResume'>
            <article>
                <section>
                    <h3>Certifications</h3>
                    <Certification certification={award}/>
                </section>
                <section>
                    <h3>Education</h3>
                </section>
                <section>
                    <h3>Skills</h3>
                </section>
                <section>
                    <h3>Project Experience</h3>
                </section>
                <section>
                    <h3>Work Experience</h3>
                </section>
            </article>
        </section>
    )
}
