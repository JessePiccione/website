import ProjectCard from "@/components/projectcard";
import SkillCard from "@/components/skillcard"
import OpenResumeButton from '@/components/fullresume/openresumebutton'
import Reveal from '@/components/reveal'
export default function eresume(){
    return (
        <>
            <Reveal as='section' id='eresume' className='eresume'>
                <article>
                    <section>
                        <h1 className='gradient-text'>Jesse&apos;s eResume</h1>
                        <h2 className='gradient-text'>Online CV Application</h2>
                        <hr/>
                        <p>
                            An enhanced resume application built using cutting edge tools
                            and technologies. The eResume Application holds stateful, live and editable,
                            data without having to update the application or replace any code.
                            Thanks to the Django Back-End server and MySQL database; employers,
                            clients and peers can view live and current resume data 24 / 7.
                        </p>
                        <OpenResumeButton/>
                    </section>
                    <aside>
                        <SkillCard/>
                        <ProjectCard/>
                    </aside>
                </article>
            </Reveal>
        </>
    )
}