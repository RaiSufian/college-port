import { Roboto } from 'next/font/google';
const roboto4 = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const Additional = () => {
    return (
        <div className="container mx-auto py-6  px-3 md:px-10">
            <h4 className={`text-center uppercase text-3xl text-[#0b3a67] py-4 relative after:absolute after:bottom-0 after:left-1/2 after:contents-'' after:w-2 after:h-2 after:border-t-2 after:border-l-2 after:border-[#0B3A67] after:rotate-45 ${roboto4.className}`}>Additional Info</h4>

            <div className="py-5">
                <h4 className="text-2xl mt-4">MISSION</h4>
                <ul className="list-disc pl-5 py-3 ">
                    <li className=" text-gray-500 lowercase">TO DEVELOP ACADEMIC POTENTIAL IN THE STUDENTS WITH MORAL AND PHYSICAL GROOMING REFLECTIVE OF THE CORE VALUES OF INTEGRITY,  DUTY  AND EXCELLENCE.</li>
                </ul>
                <h4 className="text-2xl mt-4">ROLE & TASK</h4>
                <ul className="list-disc pl-5 text-gray-500 py-3 ">
                    <li className=" lowercase">COLLEGE SARGODHA IS A RESIDENTIAL ACADEMIC INSTITUTION WHERE THE STUDENTS ARE UNDER OBLIGATION TO PURSUE A CAREER IN PAKISTAN AIR FORCEAFTER COMPLETION OF THEIR STUDIES.</li>
                    <li className=" lowercase">THE STAFF AT THE COLLEGE, BESIDES PROVIDING A MULTI-DIMENSIONAL TRAINING REGIME, REMAINS ACTIVELY INVOLVED ROUND THE CLOCK WITH THE STUDENTS TO ENSURE A CLOSE MONITORING OF THEIR WHOLE LIFE SPHERE.</li>
                </ul>
                <h4 className="text-2xl mt-4">OBJECTIVES OF TRAINING</h4>
                <ul className="list-disc pl-5 text-gray-500 py-3 ">
                    <li className=" lowercase">TO BRING ABOUT THE DESIRED ACADEMIC EXCELLENCE AND TO INCULCATE IN A STUDENT THE CAPABILITY TO THINK FOR HIMSELF AND DISPLAY IMPROVED INTER–PERSONAL COMMUNICATION SKILLS, CULTURAL AWARENESS AND HUMAN RELATIONS.</li>
                    <li className="lowercase">CHARACTER DEVELOPMENT TO ATTAIN MORAL ATTRIBUTES OF A LEADER WITH STRESS ON INTEGRITY, LOYALTY, SELF-DISCIPLINE AND DEVOTION TO DUTY.</li>
                    <li className="lowercase">PHYSICAL TRAINING IN SPORTS FIELDS THROUGH COMPETITIVE SPORTS AND ADVENTURE BASED OUTDOOR ACTIVITIES WITH A VIEW TO DEVELOPING A SENSE OF CAMARADERIE, TEAM SPIRIT AND SELF ESTEEM. </li>
                </ul>
            </div>
        </div>
    )
}
export default Additional;