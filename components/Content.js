"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import '../public/fonts/fonts.css'

function Content() {


    return (
        <>
            <section id='Über-Danilo' className='flex flex-col justify-center items-center bg-[#282727] bg-opacity-90 
                pt-20'>
                <div className=''>
                    <header className='pb-5'>
                        <h1>
                            <span className='text-6xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Über Danilo</span>
                        </h1>
                    </header>
                </div>
                <div className='w-2/4 text-center laptop:w-2/4 tablet:w-3/4'>
                    <span className='font-bold text-gray-300 text-2xl font-tilt-neon'>
                        Unser Rüde wuchs in der Kupferstadt Stolberg auf, mit dem wunderschönen Wahrzeichen der
                        Stolberger Burg, dem Tor zur Nordeifel.

                        Er liebt ausgiebige Spaziergänge in den Feldern und Tälern unserer schönen Heimat und genießt
                        ebenso das Chillen mit uns am Rursee.
                        Er ist stets ausgeglichen, genügsam und passt sich den jeweiligen Situationen an.
                        Während seines Erwachsenwerdens, besuchten wir oft die belgische und holländische Küste mit ihm,
                        und bei den Ausflügen fiel uns auf, dass er das Autofahren sehr liebt. 
                        In den Urlauben zeigt er sich interessiert an neuen Umgebungen und begleitet uns auch souverän in Biergärten oder ins Restaurant.
                        Am 01.05.2022 wurde er vom BSV 2010 e.V. nach vorgeschriebenen Regeln geprüft.
                        Er legte erfolgreich seine Zuchtzulassungsprüfung ab.
                        An seiner Seite lebt unsere ukrainische Berner Sennen Hündin Zita, die er stets kavaliersmäßig
                        behandelt und auch hin und wieder in ihre Schranken verweist.
                        Sein souveränes Verhalten gegenüber anderen Hunden beweist er jeden Tag,
                        weshalb er in unserem Ort Mausbach sehr beliebt ist.
                        Bei Spaziergängen mit anderen Hunden übernimmt er auch gerne einmal die Führungsposition
                        überlegen und stressfrei.
                        In der Welpen-, Junghund- und Hundeschule für erwachsene Fellnasen meistert er gekonnt
                        und ruhig alle gelernten Aufgaben und Situationen.
                        Außerdem möchten wir erwähnen, dass Danilo an vielen Hundeausstellungen teilgenommen
                        hat und dabei zahlreiche Auszeichnungen erhielt.
                        Danilo wurde bei der Malteser Ortsgruppe Eschweiler zum Besuchs - und Begleithund für demente Patienten ausgebildet.
                        <p>
                        Seit November 2022 kann er sich als nationaler Champion ausweisen.
                        </p>
                    </span>
                </div>
                <div className='flex justify-center laptop:w-2/4 w-3/4'>
                    <div className='flex relative flex-col pt-10'>
                        <Image className='w-3/5 mx-auto rounded-xl shadow-white shadow-xl tablet:w-full' src='https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1683228880/DSC_9112_tifgfz.jpg' alt='Banner' width={500} height={500}/>
                        <Image className='w-3/5 mx-auto rounded-xl shadow-white shadow-xl tablet:w-full' src='/Images/MichlWelpe.jpg' alt='Michlwelpe' width={500} height={500}/>
                    </div>
                </div>
                <div className='text-center lg:w-2/4 w-3/4'>   
                    <div className='pt-10 relative block tablet:w-fit'>
                        <p className='pb-5 text-center text-6xl font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white tablet:text-4xl'>Meine Lebensgefährtin</p>
                        <Image className='w-3/5 mx-auto rounded-xl shadow-white shadow-xl tablet:w-full' src='https://res.cloudinary.com/dhgsu4bpi/image/upload/q_5/v1683228794/DSC_9025_txsnba.jpg' alt='Zita' width={250} height={250}/>
                    </div>
                    <div className='pt-10 text-gray-300 font-bold'>
                        <p className='text-2xl'>
                        Meine Eltern
                        </p>
                        <ul className=''>
                            <li>
                                <p className='text-[1.25rem] leading-[1.5rem] font-bold text-gray-300'>
                                    Pablo vom Hollandhof {`\n`}
                                    E1 N/N, E2 N/N, ED 0/0, HD A
                                </p>
                            </li>
                            <li>
                                <p className='text-[1.25rem] leading-[1.5rem] font-bold text-gray-300'>
                                    Kendy vom Feldbachtal {`\n`}
                                    HD A1, ED 0/0, OCD frei, E1 N/DM, e2 N/N, WH 65
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </section>
            <section id='Deckung' className='flex flex-col justify-center items-center  bg-[#282727] bg-opacity-90 
                pt-20'>
                <div className=' pt-20 text-6xl font-bold'>
                    <header className='pb-5'>
                        <h1>
                            <span className='font-dancing-font bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-white'>Deckung</span>
                        </h1>
                    </header>
                </div>
                <div className='w-1/2 font-tilt-neon flex flex-col justify-center items-center text-gray-300 font-bold text-2xl laptop:w-1/2 tablet:w-3/4'>
                    <p className='indent-8 text-center'>

                        Wir würden uns über zuchtinteressierte Besitzer von Hündinnen freuen, welche mit Ihrer gesunden Hündin,
                        zwecks eines Deckaktes, einem unabhängigen Zuchtverband angehören.

                    </p>
                    <p className='pt-5 indent-8 text-center'>
                        Deckanfragen sollten bitte nicht kurzfristig erfolgen.
                    </p>
                </div>
                <div className='relative pt-20 block laptop:w-1/2 tablet:w-3/4 pb-20'>
                    <Image className='rounded-xl shadow-black shadow-2xl' src='/Images/Stammbaum.jpg' alt="Stammbaum" placeholderSrc='/Images/Stammbaum.jpg' width={1500} height={0} />
                </div>
            </section>
        </>
    )
}

export default Content