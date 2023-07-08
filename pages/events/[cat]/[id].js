import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'


const EventPage = ({data}) =>{
    const inputEmail = useRef();
    const router = useRouter();


    const onSubmit = async (e) =>{
        e.preventDefault();
        const emailValue = inputEmail.current.value;  
        const eventId = router?.query.id   
        
        try{
            const response = await fetch('api/email-registration', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({email: email.value, eventId})
            });

            if(!response.ok) throw new Error(`Error:  ${response.status}`)

            const data = await response.json()
            console.log('POST', data);

        } catch (e) {
            console.log('error', e);
        }
    };


    return (
        <div>
            <img src={data.image} width={500} height={300} alt={data.title}></img>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form onSubmit={onSubmit}>
                <label>Get registered for this event</label>
                <input ref={inputEmail} type='email' id='email' placeholder='please insert your email'/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default EventPage;

export async function getStaticPaths(){
    const { allEvents } = await import('../../../data/data.json')

    

    const allPaths = allEvents.map((path) =>{
        return {
            params: {
                cat: path.city,
                id: path.id
            },
        };
    });

    
    console.log('allPaths');
    console.log(allPaths);

    return{
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context){
    console.log(context);
    const id = context.params.id;
    const {allEvents} = await import('../../../data/data.json')
    const eventData = allEvents.find((ev) => id === ev.id);

    console.log(`eventData: ${eventData}`);
    return{
        props: {data: eventData}
    }
}