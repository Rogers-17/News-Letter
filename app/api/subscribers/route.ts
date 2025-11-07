import subcribers from "@/models/subscriber"
import { ConnectDB } from '@/utils/database'

export const GET = async (req: Request)=> {
    try{
        await ConnectDB();

        const allSubcribers = await  subcribers.find({})
        
        return new  Response(JSON.stringify(allSubcribers),
            { status: 200});
    } catch (error) {
        console.log(error)
        return new  Response("Failed to fetch all subcribers!",
            {status: 500 });
    }
}