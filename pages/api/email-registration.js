import path from 'path';
import fs from fs;


function builtPath(){
    return path.join(process.cwd(), 'data', 'data.json')
}


function extractData(filePath) {
    const jsonData = fs.redFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}


export default function handler (req, res) {
    const {method} = req

    const filePath = builtPath();
    const {events_categories, allEvents} = extractData(filePath);

    if(!allEvents){
        return res.status(404).json({
            status: 404,
            message: 'events data error'
        })
    }


    if(method === "POST"){
        const { email, eventId } = req.body;

        const newAllEvents = allEvents.map(ev => {
            if(ev.id === eventId) {
                if(ev.emails_registered.includes(email)){
                    res.status(201).json({message: 'this email has been registered!!!'})
                }
                return{
                    ...ev, emails_registered: [...ev.emails_registered, email]
                }
            }
            return ev;
        })

        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))

        res.status(200).json({message: `you have been registered succesfully with the email: ${email}, eventId: ${eventId}`})
    }
}